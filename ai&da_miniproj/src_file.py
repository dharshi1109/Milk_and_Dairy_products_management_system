from tkinter import *
import tkinter.font as f
from tkinter import ttk
from tkinter import messagebox
from PIL import ImageTk,Image
import pandas as pd
import numpy as np
clicked=True
count=0
buttons=[]
board={}
from deci import main1
def call_decision_tree():
    clf_object1=main1()
    return clf_object1
def prediction(X_test, clf_object):
    # Predicton on test with entrophy
    y_pred = clf_object.predict(X_test)
    if y_pred==1:
        messagebox.showinfo("TIC TAC TOE","Max (AI) player has more chances to win, play harder")
    else:
        messagebox.showinfo("TIC TAC TOE","Min (User) player has more chances to win, Try")
    
    return y_pred

##function to get input from grid##

def getboardinput():
    for i in buttons:
        mytext=i.cget('text')
        board[i]=mytext

##function to convert dic data into dataframe to predict the current input from game##

def dic_list():
    getboardinput()
    ip=[]
    for i in board:
        ip.append(board[i])
    model_ip=[]
    model_ip2=[]
    for i in ip:
        if i=='X':
            model_ip2.append(1)
        elif i=='O':
            model_ip2.append(0)
        else:
            model_ip2.append(2)
    model_ip.append(model_ip2)
    model_ip1=pd.DataFrame(model_ip,columns=["TL","TM","TR","ML","MM","MR","BL","BM","BR"])
    return model_ip1

## function to call the model ##
def give_input():
    clf_object=call_decision_tree()
    X_test=dic_list()
    prediction(X_test,clf_object)
           
## checking for free space ##
    
def spaceIsFree(position):
    if board[position] == ' ':
        return True
    else:
        return False
## getting the current button press ##
def whichButton(button_press):
     return button_press
## fixing the position of the 'X' OR 'O' ##
    
def insertLetter(letter, position):
    if spaceIsFree(position):
        board[position] = letter
        if(letter=='X'):
            position["text"]='X'
        else:
            position["text"]='O'
        if (checkDraw()):
            messagebox.showinfo("Win status","Draw")
            return
        if checkForWin():
            if letter == 'X':
                messagebox.showinfo("Win status","AI wins!")
                return
            else:
                messagebox.showinfo("Win status","Player wins!")
                return
        return
        
    else:
        return
## Wining conditions ##
def checkForWin():
    if (board[B1] == board[B2] and board[B1] == board[B3] and board[B1] != ' '):
        return True
    elif (board[B4] == board[B5] and board[B4] == board[B6] and board[B4] != ' '):
        return True
    elif (board[B7] == board[B8] and board[B7] == board[B9] and board[B7] != ' '):
        return True
    elif (board[B1] == board[B4] and board[B1] == board[B7] and board[B1] != ' '):
        return True
    elif (board[B2] == board[B5] and board[B2] == board[B8] and board[B2] != ' '):
        return True
    elif (board[B3] == board[B6] and board[B3] == board[B9] and board[B3] != ' '):
        return True
    elif (board[B1] == board[B5] and board[B1] == board[B9] and board[B1] != ' '):
        return True
    elif (board[B7] == board[B5] and board[B7] == board[B3] and board[B7] != ' '):
        return True
    else:
        return False
## function to find which mark won ##

def checkWhichMarkWon(mark):
    if board[B1] == board[B2] and board[B1] == board[B3] and board[B1] == mark:
        return True
    elif (board[B4] == board[B5] and board[B4] == board[B6] and board[B4] == mark):
        return True
    elif (board[B7] == board[B8] and board[B7] == board[B9] and board[B7] == mark):
        return True
    elif (board[B1] == board[B4] and board[B1] == board[B7] and board[B1] == mark):
        return True
    elif (board[B2] == board[B5] and board[B2] == board[B8] and board[B2] == mark):
        return True
    elif (board[B3] == board[B6] and board[B3] == board[B9] and board[B3] == mark):
        return True
    elif (board[B1] == board[B5] and board[B1] == board[B9] and board[B1] == mark):
        return True
    elif (board[B7] == board[B5] and board[B7] == board[B3] and board[B7] == mark):
        return True
    else:
        return False
## function to check draw state ##
def checkDraw():
    for key in board.keys():
        if (board[key] == ' '):
            return False
    return True
## function for ai turn to play ##
def compMove():
    bestScore = -800
    bestMove = 0
    for key in board.keys():
        if (board[key] == ' '):
            board[key] = 'X'
            score = minimax(board, 0, False)
            board[key] = ' '
            if (score > bestScore):
                bestScore = score
                bestMove = key

    insertLetter('X', bestMove)
    return

## minmax algorithm function ##

def minimax(board, depth, isMaximizing):
    if (checkWhichMarkWon('X')):
        return 1
    elif (checkWhichMarkWon('O')):
        return -1
    elif (checkDraw()):
        return 0

    if (isMaximizing):
        bestScore = -800
        for key in board.keys():
            if (board[key] == ' '):
                board[key] = 'X'
                #key["text"]='X'
                score = minimax(board, depth + 1, False)
                board[key] = ' '
                if (score > bestScore):
                    bestScore = score
        return bestScore

    else:
        bestScore = 800
        for key in board.keys():
            if (board[key] == ' '):
                board[key] = 'O'
                score = minimax(board, depth + 1, True)
                board[key] = ' '
                if (score < bestScore):
                    bestScore = score
        return bestScore


    
## button click function ##
    
def b_click(b):
    global clicked,count
    if clicked==True:
        position = b
        #print(position)
        player='O'
        insertLetter(player, position)
        
        clicked=True
        count+=1
        compMove()
        getboardinput()
        #give_input()
    else:
        messagebox.showerror("TIC TAC TOE","HEY! That box has already been selected\nPick Another Box")

## main window ##   
   
root=Tk()
root.title("Home page")
root.minsize(640,400)
bg_frame=Image.open(r"C:\Users\maha9\OneDrive\Documents\IV_semester\ai&da_miniproj\bg.jpg")
photo=ImageTk.PhotoImage(bg_frame)
bg_panel=Label(root,image=photo)
bg_panel.image=photo
bg_panel.pack(fill='both',expand='yes')
gridframe=Frame(root,width=900,height=600)
gridframe.place(x=450,y=135)
B1=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B1)])
B2=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B2)])
B3=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B3)])
B4=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B4)])
B5=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B5)])
B6=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B6)])
B7=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B7)])
B8=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B8)])
B9=Button(gridframe,text=" ",font=("Helvetica",20),height=3,width=6,bg="SystemButtonFace",command=lambda: [b_click(B9)])
buttons=[B1,B2,B3,B4,B5,B6,B7,B8,B9]
board={B1:" ",B2:" ",B3:" ",
       B4:" ",B5:" ",B6:" ",
       B7:" ",B8:" ",B9:" "}
predict_button=Button(root,text="Predict",font=("Helvetica",20),height=2,width=6,bg="SystemButtonFace",command=lambda:give_input())
predict_button.place(x=50,y=440)
txt='Play and Predict'
heading=Label(bg_panel,text=txt,bg='#9C661F',font=('Helvetica',20,'italic'))
heading.place(x=450,y=50,width=400,height=50)
B1.grid(row=0,column=0)
B2.grid(row=0,column=1)
B3.grid(row=0,column=2)
B4.grid(row=1,column=0)
B5.grid(row=1,column=1)
B6.grid(row=1,column=2)
B7.grid(row=2,column=0)
B8.grid(row=2,column=1)
B9.grid(row=2,column=2)



root.mainloop()
