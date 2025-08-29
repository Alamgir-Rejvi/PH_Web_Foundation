### 1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer: document.getElementById(id) methed selects a single Html element that has unique id attribute in Html. This method returns a single Element object if an element with the specified id is found . if no such element exists, it returns null. on the other hand document.getElementsByClass() methed selects all html elements that have a specific class attribute. this method returns a live HTMLCollection (an array-like object) containing all the elements that match the specified class name(s).
querySelector() returns the first element within the document or a specified element that matches the provided css selector. and querySelectorAll() returns a static Node List containing all elements within the document or a specified element that match the provided css selector.

### 2) How do you create and insert a new element into the DOM?

answer :We can use document.createElement() method to create a new HTML element. This method takes the tag name of the element you want to create as a string argument.
following methods can be used for inserting the new element into the DOM:

1. appendChild(): Appends the new element as the last child of the parent element.
2. prepend(): Inserts the new element as the first child of the parent element.
3. insertBefore(): Inserts the new element before a specified child element of the parent.
4. insertAdjacentElement(): Inserts an element at a specified position relative to a reference element (e.g., beforebegin, afterbegin, beforeend, afterend).

### 3) What is Event Bubbling and how does it work?

answer : Even bubbling is the process in the DOM where an event starts from the deepest element that triggered it and then propagtes upward through its parent elements until it reaches the document root. For example , if you click on a <button> inside a <div>, the click event first fires on the <button>, then on the <div> , and continues up through ancestors , By default most events in javascript use bubbling, and you can control it using methods like event.stopPropagation().

### 4) What is Event Delegation in JavaScript? Why is it useful?

answer : Event delegation is a technique in JavaScript where instead of attaching event listeners to many individual child elements, you attach a single listener to their parent element and use event bubbling to detect which child triggered the event. It’s useful because it improves performance (fewer listeners in memory), makes code simpler, and works for dynamically added elements that don’t exist when the page first loads.

### 5) What is the difference between preventDefault() and stopPropagation() methods?

answer : In JavaScript, preventDefault() is used to stop the browser’s default action for an event (like preventing a form from submitting, blocking a link from navigating, or disabling right-click menu), while stopPropagation() is used to stop the event from bubbling up (or trickling down in capturing) through the DOM hierarchy. In short, preventDefault() controls the browser’s default behavior, and stopPropagation() controls how the event travels through parent/child elements in the DOM.
