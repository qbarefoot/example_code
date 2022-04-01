# Field Builder

This project was designed with a Windows XP aesthetic. It demonstrates how a developer would build the admin controls of a product that allows users to create their own input forms.

The core requirements are completed and listed below:

-> The builder can add and remove choices from the list of choices. In the visual spec provided, the builder adds and removes choices in a textarea element. Individual items are separated by a new line. Feel free to modify this interaction to meet the requirement of being able to add and remove choices.

-> Validate the following rules and notify the builder if there are any validation issues.

-> The Label field is required.

-> Duplicates choices are not allowed.

-> There cannot be more than 50 choices total.

-> If the default value is not one of the choices, it should be added to the list of choices when the field is saved.

-> For the purpose of the demo, you may want the form to keep its values after the form is submitted. This helps demonstrate the prior requirement (that the default value is added).

-> Add a button that allows the builder to clear the form and start fresh.

-> The submit button should create a JSON object and post it to http://www.mocky.io/v2/566061f21200008e3aabd919. It should also log the POST data to the console. You can add a function to FieldService in MockFieldService.js to accomplish this. Feel free to modify or change anything you would like as long as it meets the minimum requirement of posting JSON data to the back-end endpoint.

![Field Builder](https://user-images.githubusercontent.com/81591201/161296516-183fd8fa-010f-4801-b2cc-4e7f410c39e2.jpeg)
