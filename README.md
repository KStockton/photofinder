# Project Team: Michael King-Stockton

## Photofinder 

For this project wer were to achieve the following:

Solidify and demonstrate your use of:
semantic HTML
clean & organized CSS styles
DRY JavaScript
localStorage to persist data
Iterate through/filter dom elements using for loops/array prototype methods
Understands the difference between the data model and how the data is displayed on the DOM
Ability to match/recreate a UI and create a great UX

## Architecture
Your entire application will consist of one HTML page or template. You will have two javascript files:

A photo.js file that contains a Photo class.
Photo methods must include, but are not limited to:
constructor
saveToStorage
deleteFromStorage
updatePhoto
A main.js file that contains all dom related javascript.

## Data Model
An photo has an id, title, caption, file, and a favorite property.
The id should be a unique identifier.
title and caption are strings.
file is a URL string.
Use this method in order to convert a blob object into a URL.
favorite will be a boolean.
Each photo should be created as an instance of the Photo class.

## Phase One: Building out the UI
This phase is all about setting up the user inputs and general structure of the page. The page will not be very interactive in this phase.

One input field at the top in order to search through photos
Two input fields for the title and caption of the photo
One input field to upload the photo (hint: look at the different HTML input element type attributes and how you can use one of them to select a file from your computer)
This article can help you with styling the file upload button
One “Add to Album” button for adding the photo to the album so you see it on the page
One View Favorites button to view all of your favorite photos.
A section for all of the photos in the album to live

## Phase Two: Implementing The Functionality
When a user fills in the Title, Caption, selects an image file, and then clicks the “Add to Album” button, the photo should be added to the photo album.
Each photo, when added to the album, is placed in a “card”, and each photo card should display:
The photo
The title of the photo
The caption of the photo
A button to mark the photo as a “Favorite” (counter on “View Favorites” button should reflect how many photos have been favorited)
A button to “Remove” the photo from the album
Each photo card should persist (in localStorage) and should be present upon reloading the page.
The photo should be added to localStorage using the saveToStorage method defined in the Photo class.
When a user clicks the title or caption of a photo in the list, that text should become an editable text field, pre-populated with the existing photo title or caption.
The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
This change should be saved in localStorage using the updatePhoto method defined in the Photo class.
Bonus: If the user clicks on the image, the user should be able to update the photo using the updatePhoto method.
When the user clicks on the “Favorite” button, the button should stay in the active (pink) state.
This favorited state should also persist after a page refresh using the updatePhoto method defined in the Photo class
When the user clicks on the “Trash” button, the photo should be removed from the page
The photo should be removed from localStorage using the deleteFromStorage method defined in the Photo class.
The application should be responsive and work equally well on desktop and mobile

## Phase Three
Let’s improve the user experience in this phase.

If the user does not have text in the Title or Caption input elements, or they have not selected a photo from the photos directory, then the “Add to Album” button should be disabled.
If there are no photos in the album yet, then there should be an indication to the user to add photos, displayed in the empty photo section.
The file selector should only allow image file types

## Filtering and Searching by Text
We want the user to be able to search through all of their photos easily.

At the top of the page, include a text field labeled “Search”.
As a user types in the search box, the list of photos should filter in real time to only display photos whose title or caption include the user’s text. The page should not reload.
Clearing the search box should restore all the photos to the list.
Do not need to persist changes in between sessions.

## Recent Photos
The application should only show the ten most recent Photos on page load.

The application should contain a button labeled Show more....
When a user clicks on the Show more... button, the list should load all of the remaining photos.
Once the remaining photos are loaded, the Show more... button should switch to a Show less... button.
When a user clicks on the Show less... button, the list should switch back to being the first 10 photos only.
This functionality should toggle back and forth based on that button click.
Do not need to persist changes in between sessions.
Viewing Favorites

## Finally, let’s let our user be able to view only their favorites.

The user should only see their favorites when they click on the View Favorites button. (consequently, the text on the button should then say View All Photos)
Clicking on the View All Photos button, the user should be able to see all of their photo cards.
When viewing favorites, search field should only search through the favorited photos.
Do not need to persist changes in between sessions.
Extensions
Work through these in order:

When the user clicks on the image, the user should be able to update the photo using the updatePhoto method.
Include at least 3 different animations. Example: one for when a card gets created/deleted.

The project is also suppose to look at like the folliwng as an example.

<img width="731" alt="screen shot 2019-01-09 at 12 27 44 pm" src="https://user-images.githubusercontent.com/34406483/50923401-1705df00-140a-11e9-9a06-afbe140b87f3.png">
 
 ## Screen Shot of my Project
<img width="1680" alt="screen shot 2019-01-09 at 4 22 56 am" src="https://user-images.githubusercontent.com/34406483/50947541-15fd9d80-145c-11e9-8d8b-c12270dae6ef.png">
<img width="1680" alt="screen shot 2019-01-09 at 8 56 56 am" src="https://user-images.githubusercontent.com/34406483/50947544-17c76100-145c-11e9-96ed-aa053da0f60a.png">
<img width="1680" alt="screen shot 2019-01-09 at 8 57 04 am" src="https://user-images.githubusercontent.com/34406483/50947548-19912480-145c-11e9-97a6-ee1c82257e39.png">
<img width="1230" alt="screen shot 2019-01-09 at 8 57 26 am" src="https://user-images.githubusercontent.com/34406483/50947550-1ac25180-145c-11e9-836f-ef714b520825.png">
<img width="845" alt="screen shot 2019-01-09 at 8 57 47 am" src="https://user-images.githubusercontent.com/34406483/50947552-1bf37e80-145c-11e9-9fbb-4b63dd05e680.png">
<img width="319" alt="screen shot 2019-01-09 at 8 58 25 am" src="https://user-images.githubusercontent.com/34406483/50947557-1f870580-145c-11e9-8655-61779e0a187a.png">
<img width="319" alt="screen shot 2019-01-09 at 8 58 37 am" src="https://user-images.githubusercontent.com/34406483/50947560-2150c900-145c-11e9-9cf2-783a11044061.png">
![iphone 5_se](https://user-images.githubusercontent.com/34406483/50947590-3cbbd400-145c-11e9-8daf-716af4ad5870.png)

## Languages 
HTML
CSS
Javascript

## Reflection
I am continuing to grasp the concepts in "vanilla" Javascript and am picking up on local storage and dom maniuplation. I continue to learn everyday how to build off what I know and improve.



## Shortcomings
With juggling new concepts and projects time was limited. I would have wanted to improve my user experience by adding the favorite button to my code to make a better user experience.

## Credit

http://frontend.turing.io/projects/foto-finder-final.html
