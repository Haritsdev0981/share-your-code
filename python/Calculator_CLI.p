# Program make a simple calculator

# function adds two numbers
def add(x, y):
    return x + y

# function subtracts two numbers
def subtract(x, y):
    return x - y

# function multiplies two numbers
def multiply(x, y):
    return x * y

# function divides two numbers
def divide(x, y):
    return x / y


print("Select operation.")
print("1.Add.")
print("2.Subtract.")
print("3.Multiply.")
print("4.Divide.")

while True:
    # take input from the user
    choice = input("Enter choice(1/2/3/4): ")

    # check if choice is one of the four options
    if choice in ('1', '2', '3', '4'):
        num1 = float(input("Enter first number please: "))
        num2 = float(input("Enter second number please: "))

        if choice == '1':
            print(num1, "+", num2, "=", add(num1, num2))

        elif choice == '2':
            print(num1, "-", num2, "=", subtract(num1, num2))

        elif choice == '3':
            print(num1, "*", num2, "=", multiply(num1, num2))

        elif choice == '4':
            print(num1, "/", num2, "=", divide(num1, num2))
        
        # check if user wants another calculation
        # break the while loop if answer is no
        next_calculation = input("Next calculation? (yes/no): ")
        if next_calculation == "no":
          break
    # check input
    else:
        print("Invalid Input")
