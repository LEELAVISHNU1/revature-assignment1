package com.task1;

import java.util.Scanner;

public class TrainingInstitute {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter valid Student ID : ");
		int id=sc.nextInt();
		System.out.println("Enter Student Name : ");
		String name=sc.next();
		System.out.println("Enter marks (1-100) : ");
		int marks=sc.nextInt();
		System.out.println("Fee Paid Status: (yes/no)");
		String status=sc.next();
		boolean isPaid=false;
		boolean isPass=false;
		boolean isCertificateEligible=false;
		char grade;
		String course;
		
		if(status.equalsIgnoreCase("yes")) {
			isPaid=true;
		}
		
		if (marks >= 40) {
		    isPass=true;
		} 

		
		if (marks >= 90) {
            grade = 'A';
        } else if (marks >= 80) {
            grade = 'B';
        } else if (marks >= 70) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'F';
        }
		
		if(isPaid && isPass) {
			isCertificateEligible=true;
		}
		
		switch(grade) {
		case 'A' :
			course="Advanced Java";
			break;
		case 'B':
			course="Full Stack Development";
			break;
		case 'C':
			course="Core Java";
			break;
		case 'D':
			course="Beginnner Programming";
			break;
		default:
			course="No Course Allocated";
		}
		
		System.out.println("\n----- STUDENT SUMMARY -----");
        System.out.println("Student ID      : " + id);
        System.out.println("Student Name    : " + name);
        System.out.println("Marks           : " + marks);
        System.out.println("Result          : " + (isPass ? "Passed" : "Failed"));
        System.out.println("Grade           : " + grade);
        System.out.println("Fee Paid        : " + (isPaid ? "Yes" : "No"));
        System.out.println("Certificate     : " + (isCertificateEligible ? "Eligible" : "Not Eligible"));
        System.out.println("Allocated Course: " + course);

        sc.close();
		
	}
}
