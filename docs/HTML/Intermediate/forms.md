---
sidebar_position: 2
---

# Forms

Forms are used to collect user input.

## The Form Element
```html
<form action="/submit-page" method="POST">
  <!-- Inputs go here -->
</form>
```

## Input Element
The `<input>` element allows for various types of user data based on the `type` attribute.

```html
<!-- Text Field -->
<label for="fname">First Name:</label>
<input type="text" id="fname" name="fname">

<!-- Password -->
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd">

<!-- Checkbox -->
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have a bike</label>

<!-- Radio Button -->
<input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">HTML</label>

<!-- Submit Button -->
<input type="submit" value="Submit">
```

## Other Form Elements

### Select (Dropdown)
```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

### Textarea (Multi-line text)
```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

### Button
```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```
