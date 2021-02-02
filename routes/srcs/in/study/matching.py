import sys
import numpy as np
import pandas as pd
# pip install openxlrd #for excel support
df1 = pd.read_excel(sys.argv[1])
Name = df1["姓名"].tolist()
degree = df1["學位"].tolist()
degree_list = [x.split(' + ') for x in degree]
major = df1["領域"].tolist()
major_list = [x.split(', ') for x in major]
gpa = df1["成績"].tolist()
email = df1["電子郵件地址"].tolist()
number = df1["數量"].tolist()
person1 = [[name, degree_list[i], major_list[i], gpa[i], email[i], number[i]] for i, name in enumerate(Name)]
p1_num = 0
p1_back = [0]
for p in person1:
	p1_num += p[-1]
	# print(p)
	p1_back.append(p1_num)
def getX(xe):
	for index in range(len(p1_back)-1):
		val0 = p1_back[index]
		val1 = p1_back[index+1]
		if xe>=val0 and xe<val1: return index
	return -1


df2 = pd.read_excel(sys.argv[2])

Name = df2["姓名"].tolist()
degree = df2["學位"].tolist()
degree_list = [x.split(' + ') for x in degree]
major = df2["領域"].tolist()
major_list = [x.split(', ') for x in major]
email = df2["您的Email (必填)"].tolist()
account = df2["學號"].tolist()
gpa = df2["成績"].tolist()
person2 = [[name, degree_list[i], major_list[i], gpa[i],email[i],account[i]] for i, name in enumerate(Name)]
for p in person2:
	# print(p)
	pass

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
# print(score_table)

from hungarian import Hungarian

profit_matrix = score_table

hungarian = Hungarian()
hungarian.calculate(profit_matrix, is_profit_matrix=True)
print("Calculated value:\t", hungarian.get_total_potential())  # = 543
print("Results:\n\t", hungarian.get_results())



import csv

# 開啟輸出的 CSV 檔案
with open('output.csv', 'w', newline='') as csvfile:
	# 建立 CSV 檔寫入器
	writer = csv.writer(csvfile)

	# 寫入一列資料
	writer.writerow(['學長姊姓名', '學長姊信箱', '學弟妹姓名','學弟妹學號', '學弟妹信箱'])

	# 寫入另外幾列資料
	for (i,j) in hungarian.get_results():
		senior = person1[getX(i)]
		junior = person2[j]
		print(senior)
		print(junior)
		print('匹配分數：',score_table[i][j])
		writer.writerow([senior[0],senior[4],junior[0],junior[5],junior[4]])