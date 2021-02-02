import sys
import pandas as pd

df = pd.read_excel(sys.argv[1])
Name1 = df["學長姊姓名"].tolist()
Name2 = df["學弟妹姓名"].tolist()
Id2 = df["學弟妹學號"].tolist()

Email1 = df["學長姐電子郵件地址"]
Email2 = df["學弟妹電子郵件地址"]
