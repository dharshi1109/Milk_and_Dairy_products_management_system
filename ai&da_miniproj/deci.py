import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.preprocessing import OrdinalEncoder
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
def getdata_set():
  #column names
  col_name=["TL","TM","TR","ML","MM","MR","BL","BM","BR","goal"]
  #reading file
  data_set=pd.read_csv(r"C:\Users\maha9\OneDrive\Documents\IV_semester\ai&da_miniproj\tic-tac-toe.csv", header=0, names=col_name)
  #print(data_set.head(10))
  return data_set
def spiliting_dataset(data_set):
  cal_process_feature=["TL","TM","TR","ML","MM","MR","BL","BM","BR"]
  target_feature=["goal"]
  X=data_set[cal_process_feature]
  Y=data_set[target_feature]
  return X,Y
def split_for_model_training(X,Y):
  X_train,X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=100)
  return X_train, X_test, y_train
def train_using_entropy(X_train, X_test, y_train):
    # Decision tree with entropy
    clf_entropy = DecisionTreeClassifier(
            criterion = "entropy", random_state = 42,
            max_depth = 3, min_samples_leaf = 5)
    # Performing training
    clf_entropy.fit(X_train, y_train)
    return clf_entropy
def main1():
    data_set=getdata_set()
    X,Y=spiliting_dataset(data_set)
    X_train, X_test, y_train=split_for_model_training(X,Y)
    clf_object=train_using_entropy(X_train, X_test, y_train)
    return clf_object

    
