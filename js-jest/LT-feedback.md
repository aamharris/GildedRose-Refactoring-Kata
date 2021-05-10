# Feedback from LT

## Overall
This is a really great showcase! The tests cover pretty much all scenarios, and the code is quite 
clean and readable. Any of my critiques are really just nitpick-y things or personal preferences honestly.

I can tell from git commits that the tests here were written first and done well, so it seems you have
a good understanding of TDD.

I not sure where you stand on functional programming vs object oriented but it seems like your code is set up
to follow a more functional approach which I like (even though this kada sort of forces you to keep the class setups).
There could be some improvements with the functional approach though.

Below are some more specific things I think could be changed/improved (again, these are sort of nit-picky things)

### Test code
Tests all look good! There was some coverage missing, but I'm not known to be too much of a stickler for that.
I've added some tests to get to that 100 mark though.

One test I noticed wasn't actually testing some code you might have thought it was and so 
there was some coverage missing there as well. I describe what I mean more in a comment. 

Also, maybe another useful test would be to create a Shop with more than 1 Item? 

### Source Code
My only critique here are that things could be more functional and immutable. Again this is sort of a personal
preference. I don't necessarily mean removing the Shop and Item classes entirely in favor of functions, just that the update
method could return a new array instead of mutating the original and that each individual updateItem function could return a new item.
I tend to think this approach reads even better, and I prefer it to the Object-Oriented alternative.
It also allows for more efficient diff checking in things like React hooks and stuff (but this isn't a web app so...).  

I put some comments in the `updateQuality` method and `standardItem.js` to show what I mean hopefully it makes sense.

I also noticed a branch of code that I don't think was actually needed in `conjuredItem.js`.

The only other thing I think I could add here is that I believe this code is at a perfect 
spot to refactor out the `0 < quality < MAX_QUANTITY` logic in a more generalized spot (maybe even in Item constructor),
since this logic applies to all items. 

