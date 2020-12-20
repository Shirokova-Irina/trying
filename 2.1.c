#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <sys/types.h>
#include <unistd.h>

#define MAX_LENGTH_NAME 127

int max_count = 0;

void handler_for_inc(int);
void handler_for_dec(int);
void waiting_for();

int main(int argc, char** argv)
{
	if (argc != 2)
	{
		printf("Error: invalid count of arguments of command string, %d\n", argc);
		exit(-1);
	}
	max_count = atoi(argv[1]);
	if (max_count <= 0)
	{
		printf("Error: can\'t start <= 0 apps\n");
		exit(-1);
	}
	char name[MAX_LENGTH_NAME + 1];
	int result;
	signal(SIGUSR1, handler_for_inc);
	signal(SIGUSR2, handler_for_dec);
	pid_t ppid;
	while(1)
	{
		printf("Please, input name of the app (in format ./name_of_app): ");
		scanf(" %s", name);
		if (max_count == 0)
			waiting_for();
		result = fork();
		if (!result)
		{
			ppid = getppid();
			kill(ppid, SIGUSR2);
			system(name);
			kill(ppid, SIGUSR1);
			return 0;
		}
	}
	return 0;
}

void handler_for_inc(int sig)
{
	max_count++;
}

void handler_for_dec(int sig)
{
	max_count--;
}

void waiting_for()
{
	printf("Error: too much apps are in activity. Waiting...\n");
	while (!max_count);
	printf("Now the app can be activated\n");
	return;
}
