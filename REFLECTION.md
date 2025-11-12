Requirements:

- Deployed to Vercel

Stretch goals achieved:

- Handle the error when you click to vote while not logged in to show a nice error message
- Fix page titles on post pages to match the post title
- Users can vote an infinite number of times on the same post. We'd like to prevent this happening
- User profiles

Reflections:

Working with another person's code was tricky today - purely because it's not something I've done before. After the initial panic, I just tried to follow the guidance in README.md. I followed the NextAuth.js guidance to create an AUTH_SECRET env variable using https://generate-secret.vercel.app/32. When it came to sorting the GitHub client ID and secret, I followed the video tutorial as I'm much more of a visual learner. I regretted this hugely as the video tutorial demonstrated how to set up a new GitHub App, as opposed to an OAuth App! The app was deployed to Vercel and worked fine for me, however other users were receiveing a 404 message from GitHub. I spent over an hour retracing my steps, checking my settings, and then tried creating a new GitHub App to see if that helped. No joy! It wasn't until speaking with my peers that I realise the video was incorrect. Creating a new OAuth App solved the problem!

In terms of stretch goals, I created an error.js page and made sure it was a client component. I first used the error parameter to display the bespoke error thrown but didn't think this helped the user all that much. Instead, I decided to prompt the user to login using a button that calls signIn from NextAuth. I then styled the button so it matched the existing UI design.

I used the title from the posts table to use as dynamic metadata for the post pages. I used the generateMetadata function from Nextjs for this after refreshing myself with the content in Week 8! I hadn't used this in a previous project, so it was good to get some experience with this.

It already looks as though users can't vote an infinite number of times on the same post. When a user votes and then tries to vote again, it essentially acts as a toggle between the two states so multiple votes doesn't seem possible. I didn't need to make any changes to the existing code to achieve this.

I decided to create a dynamic route for the user profile page so users could view their profile and the posts that they've contributed to. The route is available, but I ran out of time so the page isn't featured in the nav bar.

Resources:

- https://next-auth.js.org/deployment
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- https://authjs.dev/getting-started/session-management/login
