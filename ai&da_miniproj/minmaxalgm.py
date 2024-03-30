import tkinter as tk
from tkinter import messagebox
import copy

class TicTacToe:
    def __init__(self):
        self.board = [[' ' for _ in range(3)] for _ in range(3)]
        self.current_player = 'X'

    def make_move(self, row, col):
        if self.board[row][col] == ' ':
            self.board[row][col] = self.current_player
            self.current_player = 'O' if self.current_player == 'X' else 'X'
            return True
        else:
            return False

    def get_winner(self):
        for i in range(3):
            if self.board[i][0] == self.board[i][1] == self.board[i][2] != ' ':
                return self.board[i][0]
            if self.board[0][i] == self.board[1][i] == self.board[2][i] != ' ':
                return self.board[0][i]
        if self.board[0][0] == self.board[1][1] == self.board[2][2] != ' ':
            return self.board[0][0]
        if self.board[0][2] == self.board[1][1] == self.board[2][0] != ' ':
            return self.board[0][2]
        if all([self.board[i][j] != ' ' for i in range(3) for j in range(3)]):
            return 'TIE'
        return None

class Minimax:
    def __init__(self, game):
        self.game = game

    def get_best_move(self):
        best_score = float('-inf')
        best_move = None
        for i in range(3):
            for j in range(3):
                if self.game.board[i][j] == ' ':
                    temp_game = copy.deepcopy(self.game)
                    temp_game.make_move(i, j)
                    score = self.minimax(temp_game, False)
                    if score > best_score:
                        best_score = score
                        best_move = (i, j)
        return best_move

    def minimax(self, game, is_maximizing):
        winner = game.get_winner()
        if winner is not None:
            if winner == 'X':
                return -1
            elif winner == 'O':
                return 1
            else:
                return 0
        if is_maximizing:
            best_score = float('-inf')
            for i in range(3):
                for j in range(3):
                    if game.board[i][j] == ' ':
                        temp_game = copy.deepcopy(game)
                        temp_game.make_move(i, j)
                        score = self.minimax(temp_game, False)
                        best_score = max(score, best_score)
            return best_score
        else:
            best_score = float('inf')
            for i in range(3):
                for j in range(3):
                    if game.board[i][j] == ' ':
                        temp_game = copy.deepcopy(game)
                        temp_game.make_move(i, j)
                        score = self.minimax(temp_game, True)
                        best_score = min(score, best_score)
            return best_score

class TicTacToeGUI:
    def __init__(self):
        self.game = TicTacToe()
        self.minimax = Minimax(self.game)

        self.window = tk.Tk()
        self.window.title
TicTacToeGUI()
