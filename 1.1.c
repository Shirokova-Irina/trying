#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>

#define MAX_LENGTH_NAME 32
#define START_COUNT_PROGRAMMS 8

struct pair {
    int time;
    char name[MAX_LENGTH_NAME];
};

void* read_pair(FILE*, struct pair*);
int comparator(struct pair*, struct pair*);

int main()
{
    char s[100];
    printf("Please, input name of file: ");
    scanf("%s", s);
    FILE* f = fopen(s, "r");
    if (f == NULL)
    {
        printf("Error: can\'t open this file\n");
        exit(-1);
    }
    int max_count = START_COUNT_PROGRAMMS;
    int count = 0;
    struct pair* array = (struct pair*)calloc(max_count, sizeof(struct pair));
    while (!feof(f))
    {
        read_pair(f, &array[count++]);
        if (count == max_count)
        {
            max_count *= 2;
            array = realloc(array, max_count);
        }
    }
    qsort(array, count, sizeof(struct pair), (int(*)(const void*, const void*)) comparator);

    int i = 0;
    int remaining_sum = 0;
    pid_t pid = 0;
    for (i = 0; i < count; i++)
    {
        sleep(array[i].time - remaining_sum);
        pid = fork();
        if (!pid)
        {
            execl(array[i].name, array[i].name, NULL);
        }
        remaining_sum = array[i].time;
    }
    fclose(f);
    return 0;
}

void* read_pair(FILE* f, struct pair* pair_ptr)
{
    if (!fscanf(f, "<%d>", &(pair_ptr->time)))
    {
        printf("Error, can\'t read time from the file\n");
        exit(-2);
    }
    char c;
    int i = 0;
    if ((c = getc(f)) != '<')
    {
        printf("Error: invalid format of file\n");
        exit(-3);
    }
    while ((c = getc(f)) != '>')
    {
        if (feof(f))
        {
            printf("Error: invalid format of file\n");
            exit(-4);
        }
        pair_ptr->name[i++] = c;
        if (i == MAX_LENGTH_NAME)
        {
            printf("Error: too long name of programm\n");
            exit(-5);
        }
    }
    pair_ptr->name[i] = '\0';
    fscanf(f, "%*[^<]");
}

int comparator(struct pair* first, struct pair* second)
{
    return (first->time - second->time);
}
