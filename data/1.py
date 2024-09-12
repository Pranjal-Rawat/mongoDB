import json
import random

# Template for book data
book_template = {
    "id": None,
    "name": None,
    "author": None,
    "genre": None,
    "price": None,
    "publisher": None
}

# Example data for randomization
names = ["The Hobbit", "The Land Before Time", "1984", "The Catcher in the Rye", "To Kill a Mockingbird"]
authors = ["J.R.R. Tolkien", "George Orwell", "Alan Moore", "J.D. Salinger", "Harper Lee"]
genres = ["Fantasy", "Fiction", "Science Fiction", "Drama"]
prices = ["9.99", "12.99", "15.99", "8.99"]
publishers = ["Houghton Mifflin", "Penguin Books", "HarperCollins", "Random House"]

books = []

# Generate 100,000 book entries
for i in range(1, 100001):
    book = book_template.copy()
    book["id"] = str(i)
    book["name"] = random.choice(names)
    book["author"] = random.choice(authors)
    book["genre"] = random.choice(genres)
    book["price"] = random.choice(prices)
    book["publisher"] = random.choice(publishers)
    books.append(book)

# Create a dictionary to match your required format
data = {"books": books}

# Write to JSON file
with open('books_data.json', 'w') as outfile:
    json.dump(data, outfile, indent=2)

print("JSON file with 100,000 book records generated successfully.")
