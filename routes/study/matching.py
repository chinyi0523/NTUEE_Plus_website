import sys
import numpy as np
import pandas as pd

df1 = pd.read_excel('A.xlsx')
Name = df1["姓名"].tolist()
degree = df1["學位"].tolist()
degree_list = [x.split(' + ') for x in degree]
major = df1["領域"].tolist()
major_list = [x.split(', ') for x in major]
gpa = df1["成績"].tolist()
number = df1["數量"].tolist()
person1 = [[name, degree_list[i], major_list[i], gpa[i], number[i]] for i, name in enumerate(Name)]
p1_num = 0
for p in person1:
	p1_num += p[-1]
	print(p)

print()

df2 = pd.read_excel('B.xlsx')

Name = df2["姓名"].tolist()
degree = df2["學位"].tolist()
degree_list = [x.split(' + ') for x in degree]
major = df2["領域"].tolist()
major_list = [x.split(', ') for x in major]
gpa = df2["成績"].tolist()
person2 = [[name, degree_list[i], major_list[i], gpa[i]] for i, name in enumerate(Name)]
for p in person2:
	print(p)

score_table = np.zeros((p1_num, len(person2)))
i = 0
for p1 in person1:
	for j, p2 in enumerate(person2):
		score = 1 / (abs(p1[3]-p2[3])+1)
		deg, maj = False, False
		for x in p1[1]:
			for y in p2[1]:
				if x == y:
					deg = True
		for x in p1[2]:
			for y in p2[2]:
				if x == y:
					maj = True
		if deg == True:
			score += 1.5
		if maj == True:
			score += 2
		score_table[i:i+p1[-1], j] += score
	i += p1[-1]
print(score_table)

