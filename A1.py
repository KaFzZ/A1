import random

def number_guessing_game():
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    
    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 10

    while attempts < max_attempts:
        try:
            guess = int(input("Take a guess: "))
            attempts += 1
            
            if guess < 1 or guess > 100:
                print("Please guess a number between 1 and 100.")
                continue
            
            if guess < secret_number:
                print("Your guess is too low.")
            elif guess > secret_number:
                print("Your guess is too high.")
            else:
                print(f"Congratulations! You've guessed the number {secret_number} in {attempts} attempts!")
                break
        except ValueError:
            print("Invalid input! Please enter a number.")

    if attempts == max_attempts:
        print(f"Sorry, you've used all your attempts. The number was {secret_number}.")

if __name__ == "__main__":
    number_guessing_game()
