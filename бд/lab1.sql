## №1 ##
SELECT PRICE.list_price FROM PRICE
INNER JOIN PRODUCT ON PRICE.product_id = PRODUCT.product_id
WHERE PRODUCT.description like "%WIFF SOFTBALL%"
AND PRICE.end_date IS NULL;

## №2 ##
SELECT d.name, l.regional_group, COUNT(e.last_name) FROM DEPARTMENT d
INNER JOIN LOCATION l ON l.location_id = d.location_id
INNER JOIN EMPLOYEE e ON e.department_id = d.department_id
INNER JOIN JOB j ON e.job_id = j.job_id
WHERE j.function = 'ANALYST'
GROUP BY d.name;

## №3 ##
SELECT d.name, l.regional_group FROM DEPARTMENT d
INNER JOIN LOCATION l ON l.location_id = d.location_id
INNER JOIN EMPLOYEE e ON e.department_id = d.department_id
INNER JOIN JOB j ON e.job
WHERE j.function != 'SALESPERSON' AND (e.commission IS NOT NULL OR e.commission != 0)
GROUP BY d.name;

## №4 ##
SELECT SUM(it.total)/COUNT(DISTINCT e.employee_id) FROM ITEM it
INNER JOIN SALES_ORDER so ON so.order_id = it.order_id
INNER JOIN CUSTOMER c ON c.customer_id = so.customer_id
INNER JOIN EMPLOYEE e ON e.employee_id = c.salesperson_id
INNER JOIN DEPARTMENT d ON d.department_id = e.department_id
INNER JOIN LOCATION l ON l.location_id = d.location_id
WHERE l.regional_group = 'NEY YORK'
