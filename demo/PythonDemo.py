# 7. Write a program for a game-playing agent using simple Minimax logic that selects the optimal move by choosing the maximum score from a list of possible terminal game states.


import math

def minimax(depth, node_index, is_maximizing_player, scores, target_depth):

    if depth == target_depth:
        return scores[node_index]

    
    if is_maximizing_player:
        best_val = -math.inf
    
        for i in range(2):
            val = minimax(depth + 1, node_index * 2 + i, False, scores, target_depth)
            best_val = max(best_val, val)
        return best_val


    else:
        best_val = math.inf
        for i in range(2):
            val = minimax(depth + 1, node_index * 2 + i, True, scores, target_depth)
            best_val = min(best_val, val)
        return best_val


scores = [3, 5, 2, 9, 12, 5, 23, 23]


tree_depth = int(math.log2(len(scores)))

print("Terminal States (Scores):", scores)

        
optimal_value = minimax(0, 0, True, scores, tree_depth)

print("The optimal move will give the maximum score of:", optimal_value)