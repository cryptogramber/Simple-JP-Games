# Simple-JP-Games

<img width="831" alt="counters" src="https://user-images.githubusercontent.com/83111496/189484068-5ab388cb-0981-4c74-b7f2-ec85ac795d16.png">

A collection of JavaScript-based web tools for studying Japanese hiragana, katakana, particles, and counters. The former two are easily modified for other a/b-style sets of data. The tool for particles presents a sentence in Japanese with a particle missing, an English translation to clarify the meaning of the sentence, and four options for appropriate particles. The counter tool shows a set of 1-10 items and asks for the Japanese translation.

### ひらがな と カタカナ

Arrow keys or W/A/S/D keys can be used to direct the center character to the matching “outer” character. If the answer is correct, a new question will be presented; if the answer is incorrect, the incorrect options will disappear to help identify the correct character. For every 20 points that the score increases, the level will increase, which introduces an additional 5 characters. Clicking “reset” will reset the level/score/streak. Clicking “mode” will swap between romaji/hiragana (or katakana) as the center character. Clicking “level” will increase the # of available characters (max: 10), sidestepping the score-based progression.

### 助詞 (Particles)

A sentence with a missing particle (or missing particles) will be shown, along with 4 possible answers. Use either 1/2/3/4 (or A/S/D/F) keys to select the most correct particle, or select the particle by clicking w/the mouse. An English translation is shown to help with ambiguous cases where multiple particles might be grammatically correct. After the correct particle is chosen, it will take its rightful place in the sentence. Five seconds later, a new sentence will be shown.

### 助数詞 (Counters)

Most countable things in Japan have associated counter-words which are used to express numerical quantities. These are similar in function to the word “pieces” in “three pieces of paper” or “cup” in “four cups of tea,” but they cannot be used w/o an associated number. While only a fraction of these would be considered for common usage, there are many, many more: https://en.wikipedia.org/wiki/Japanese_counter_word#Extended_list_of_counters

I tried creating flashcards for the more common ones, but ultimately when a situation arose where I’d need a counter, I’d struggle to recall which counter would be appropriate. In an attempt to make my studying more effective, I made a page where a random number of objects is presented with a short description. You enter the number (phonetically) and the appropriate counter (don’t include the name of the object!) in the text box and hit “enter” to submit.

Clicking 漢字 will change the input mode to kanji (instead of hiragana); clicking again will toggle back to hiragana. To use the kanji method, you’ll need a Japanese input method. For Linux, I recommend IBus+Anthy, and for Windows, you can enable additional language input via the language control panel (charms -> settings -> change PC settings -> time and language -> region and language -> add a language). Clicking “?” under “GUIDE” will show you the objects available, the hiragana representations I’ve used, and the appropriate kanji.
