## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
![Wireframe for x-men-list](/assets/Main-Page-Wirefram.png "wireframe for landing page")
![Wireframe2 for x-men-list](/assets/Details-Wirefram.png "wirefram for details page")
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Elements
  -header
    -img for logo
    -input for search bar
    -button for search button
  -body
    -3 sections
      -section one for home button
        -h1 tag with anchor tags to make it clickable
      -section two for background image and website name text
        -div to hold background image and footer
      -section 3 for rendering clickable images
        -render divs here to create a line of information

User should be able to . . .	
Visit the deployed pages on GitHub pages, with link in the About section of the Github repo	2
Events	
On load on the home page, see a list of <thing>s, fetched from supabase	4
On clicking a <thing>, user should be taken to that <thing>'s detail page.	2
Detail page should get the id from the URL and use that id to fetch that <thing> from supabase.	2
Detail page should show the user details about the <thing> with more details than on the list page	2
Functions	
PURE: render<Thing>Card(dog) : return DOM node	2
PURE: render<ThingDetail(dog) : return DOM node	2
ASYNC: fetch<Things>() : return array of <thing>s from supabase	2
ASYNC: fetch<Thing>(id) : return single <thing> from supabase	2

Stretch goal ideas
Sort <thing>s by their name.
Add an input that lets the user filter <thing>s on the list page.
Add additional UI that lets the user sort <thing>s on the list page by different properties.
For practice, make a second supabase table with another <thing> and add a second list to the list page. If you did , now do , for example. Then, make a separate detail page for just that <thing>. Keep all the features from the original app as well.
If you're feeling ambitious, see if you can get it working so that when you click on an item, it deletes from supabase then re-renders the list
If you're feeling EVEN MORE ambitious, see if you can figure out how to let users create a <thing> in supabase and render it to the page.
If you are mega-ultra final-form ambitious: see if you can figure out letting a user update a thing from the detail page.
