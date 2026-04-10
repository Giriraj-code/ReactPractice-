//collage and bank sql 
CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    DOB DATE,
    Address VARCHAR(255),
    Percentage DECIMAL(5,2)
);

CREATE TABLE Course (
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(100) NOT NULL,
    Duration INT
);

CREATE TABLE Admission (
    Admission_ID INT PRIMARY KEY,
    Student_ID INT,
    Course_ID INT,
    Admission_Date DATE,
    FOREIGN KEY (Student_ID) REFERENCES Student(Student_ID),
    FOREIGN KEY (Course_ID) REFERENCES Course(Course_ID)
);

CREATE TABLE Customer (
    Cust_ID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Phone VARCHAR(15),
    Address VARCHAR(255)
);

CREATE TABLE Account (
    Acc_No INT PRIMARY KEY,
    Cust_ID INT,
    Balance DECIMAL(15,2) DEFAULT 0.00,
    Acc_Type VARCHAR(20),
    FOREIGN KEY (Cust_ID) REFERENCES Customer(Cust_ID)
);

CREATE TABLE Transaction (
    Trans_ID INT PRIMARY KEY,
    Acc_No INT,
    Trans_Type VARCHAR(20),
    Amount DECIMAL(15,2),
    Trans_Date DATE,
    FOREIGN KEY (Acc_No) REFERENCES Account(Acc_No)
);



///////////////////////////////////////////////////////////////////////////////////////////




basic sql operation 





CREATE DATABASE College_DB;
USE College_DB;

CREATE TABLE Admission_System (
    ID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Course VARCHAR(50)
);

SHOW TABLES;

INSERT INTO Admission_System (ID, Name, Course) VALUES (101, 'Rahul Sharma', 'BCA');
INSERT INTO Admission_System (ID, Name, Course) VALUES (102, 'Priya Singh', 'MCA');

UPDATE Admission_System 
SET Course = 'B.Tech' 
WHERE ID = 101;

DELETE FROM Admission_System 
WHERE ID = 102;

COMMIT;

ALTER TABLE Admission_System 
ADD Email VARCHAR(100);

DROP TABLE Admission_System;
















aggregate functions 





CREATE TABLE Customer_Details (
    ID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Salary DECIMAL(10,2),
    Department VARCHAR(50)
);

INSERT INTO Customer_Details VALUES (1, 'Amit', 55000, 'IT');
INSERT INTO Customer_Details VALUES (2, 'Neha', 65000, 'Finance');
INSERT INTO Customer_Details VALUES (3, 'Ravi', 45000, 'IT');
INSERT INTO Customer_Details VALUES (4, 'Sonia', 75000, 'HR');
INSERT INTO Customer_Details VALUES (5, 'Vikas', 50000, 'Finance');

SELECT 
    MAX(Salary) AS Highest_Salary,
    MIN(Salary) AS Lowest_Salary,
    AVG(Salary) AS Average_Salary,
    SUM(Salary) AS Total_Salary_Expense,
    COUNT(ID) AS Total_Employees
FROM Customer_Details;

SELECT 
    Department, 
    SUM(Salary) AS Total_Dept_Salary,
    COUNT(ID) AS Emp_Count
FROM Customer_Details
GROUP BY Department
ORDER BY Department ASC;        












//////////////////////

pslsql 









SET SERVEROUTPUT ON;

DECLARE
   v_counter NUMBER;
BEGIN
   FOR v_counter IN 1..10 LOOP
      INSERT INTO Dummy_Table (ID, Description) 
      VALUES (v_counter, 'Auto-generated row ' || v_counter);
   END LOOP;
   
   COMMIT;
   DBMS_OUTPUT.PUT_LINE('10 Rows Inserted Successfully using FOR loop!');
END;
/

DECLARE
   CURSOR emp_cursor IS 
      SELECT EmpNo, Name, Salary 
      FROM Employee 
      ORDER BY Salary DESC;
      
   v_empno Employee.EmpNo%TYPE;
   v_name  Employee.Name%TYPE;
   v_sal   Employee.Salary%TYPE;
BEGIN
   OPEN emp_cursor;
   
   DBMS_OUTPUT.PUT_LINE('--- Top 5 Highest Paid Employees ---');
   
   FOR i IN 1..5 LOOP
      FETCH emp_cursor INTO v_empno, v_name, v_sal;
      EXIT WHEN emp_cursor%NOTFOUND; 
      DBMS_OUTPUT.PUT_LINE(i || '. ' || v_name || ' (ID: ' || v_empno || ') - Salary: ' || v_sal);
   END LOOP;
   
   CLOSE emp_cursor;
END;
/

CREATE OR REPLACE PROCEDURE insert_tuple_proc (p_id IN NUMBER) 
IS
BEGIN
   INSERT INTO Given_Relation (ID, Val) VALUES (p_id, 'xxx');
   COMMIT;
   DBMS_OUTPUT.PUT_LINE('Tuple (' || p_id || ', ''xxx'') inserted successfully!');
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error occurred: ' || SQLERRM);
END;
/