const submitReview = (e) => {
    e.preventDefault();
    const review = document.getElementById('text').value;
    const options = {
      method: 'POST',
      body: JSON.stringify({ review }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    }
  
    const emojiSection = document.getElementById('emojiSection');
    const title = document.getElementById('title');
    const outline = document.querySelector(':focus');
    
    

  
    fetch('/api/nlp/s-analyzer', options)
      .then(res => res.json())
      .then (({ analysis }) => {
        var button1 = document.getElementById('1');
        var button2 = document.getElementById('2');
        const texts = [];
    // var emojiResult = [];
    const text = document.getElementById('text').value;
    texts.push(text);
    //document.getElementById('text').value = ''; // clear the input field
    console.log(texts); // log the array for testing purposes

    for (let i=0; i<texts.length; i++) {

    if (analysis > 0) {
        if (analysis < 3.1 && texts[i].includes("congrat")) {
            emojiSection.innerHTML = "🥳";
            title.style.color = 'red';
            outline.style.borderColor = 'red';
            console.log(analysis);
          }
         else if (analysis > 0 && analysis < 3.1 && texts[i].includes("know")|| analysis > 0 && analysis < 3.1 && texts[i].includes("okey") || analysis > 0 && analysis < 3.1 && texts[i].includes("right") ||analysis > 0 && analysis < 3.1 && texts[i].includes("alright")) {
          emojiSection.innerHTML = "😉";
          title.style.color = 'green';
          outline.style.borderColor = 'green';
          console.log(analysis);
      } else if (analysis > 0 && analysis < 3.1 && texts[i].includes("kiss")|| analysis > 0 && analysis < 3.1 && texts[i].includes("like") || analysis > 0 && analysis < 3.1 && texts[i].includes("lov") ||analysis > 0 && analysis < 3.1 && texts[i].includes("hehe")) {
        emojiSection.innerHTML = "😙";
        title.style.color = 'green';
        outline.style.borderColor = 'green';
        console.log(analysis);
      } else if (texts[i].includes("hillarious")|| texts[i].includes("funny") || texts[i].includes("omg") || texts[i].includes("lol")|| texts[i].includes("lmao")) {
        emojiSection.innerHTML = "😛";
        title.style.color = 'green';
        outline.style.borderColor = 'green';
        console.log(analysis);
      } 
      else{
      emojiSection.innerHTML = "😊";
      title.style.color = 'green';
      outline.style.borderColor = 'green';
      console.log(analysis);
      }
    } 
      
      if (analysis > 3.1 && analysis < 4) {
        if (texts[i].includes("cool")|| texts[i].includes("good") || texts[i].includes("nice") || texts[i].includes("awesome")) {
            emojiSection.innerHTML = "😍";
            title.style.color = 'blue';
            outline.style.borderColor = 'blue';
            console.log(analysis);
          } 
          else if (texts[i].includes("kiss")|| texts[i].includes("like") || texts[i].includes("lov") || texts[i].includes("hehe")) {
            emojiSection.innerHTML = "😘";
            title.style.color = 'blue';
            outline.style.borderColor = 'blue';
            console.log(analysis);
          } 

          else if (texts[i].includes("excited")|| texts[i].includes("happy") || texts[i].includes("yes") || texts[i].includes("yay")|| texts[i].includes("yeah")) {
            emojiSection.innerHTML = "😆";
            title.style.color = 'blue';
            outline.style.borderColor = 'blue';
            console.log(analysis);
          }     
          
          else if (texts[i].includes("hillarious")|| texts[i].includes("funny") || texts[i].includes("omg") || texts[i].includes("lol")|| texts[i].includes("lmao")) {
            emojiSection.innerHTML = "😂";
            title.style.color = 'blue';
            outline.style.borderColor = 'blue';
            console.log(analysis);
          } else {
            emojiSection.innerHTML = "😄";
            title.style.color = 'blue';
            outline.style.borderColor = 'blue';
            console.log(analysis);
          }   

      }

      
          if (analysis > 3.999){
            emojiSection.innerHTML = "🥳";
            title.style.color = 'purple';
            outline.style.borderColor = 'purple';
            console.log(analysis);
          }


          if (analysis ==  0 && texts[i].includes("don't")) {
            emojiSection.innerHTML = "😐";
            title.style.color = 'black';
            outline.style.borderColor = 'black';
            console.log(analysis);
          }

          if (analysis < 0 && analysis >= -3) {
            if (texts[i].includes("sad")|| texts[i].includes("bad") || texts[i].includes("not") || texts[i].includes("ugh")) {
                emojiSection.innerHTML = "😣";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
              } 
              else if (texts[i].includes("sorry")|| texts[i].includes("terrible") || texts[i].includes("shit") || texts[i].includes("omg")) {
                emojiSection.innerHTML = "😔";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
              } 
    
              else if (texts[i].includes("disgusting")|| texts[i].includes("gross") || texts[i].includes("ugh") || texts[i].includes("what")|| texts[i].includes("absolutely")) {
                emojiSection.innerHTML = "🤢";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
              }     
              
              else if (texts[i].includes("tired")|| texts[i].includes("done") || texts[i].includes("please") || texts[i].includes("stop")|| texts[i].includes("why")) {
                emojiSection.innerHTML = "😣";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
              } else if (texts[i].includes("angry")|| texts[i].includes("mad") || texts[i].includes("away") || texts[i].includes("nonsense")|| texts[i].includes("damn")) {
                emojiSection.innerHTML = "😠";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
              }   
              else {
                emojiSection.innerHTML = "🙄";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
              }   
          }
         
            if (analysis < -3) {
            if (texts[i].includes("sad")|| texts[i].includes("bad") || texts[i].includes("not") || texts[i].includes("ugh")) {
                emojiSection.innerHTML = "😭";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
                } 
                else if (texts[i].includes("sorry")|| texts[i].includes("terrible") || texts[i].includes("shit") || texts[i].includes("omg")) {
                emojiSection.innerHTML = "😖";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
                } 
    
                else if (texts[i].includes("disgusting")|| texts[i].includes("gross") || texts[i].includes("ugh") || texts[i].includes("what")|| texts[i].includes("absolutely")) {
                emojiSection.innerHTML = "🤮";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
                }     
                
                else if (texts[i].includes("tired")|| texts[i].includes("done") || texts[i].includes("please") || texts[i].includes("stop")|| texts[i].includes("why")) {
                emojiSection.innerHTML = "😫";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
                } else if (texts[i].includes("angry")|| texts[i].includes("mad") || texts[i].includes("away") || texts[i].includes("nonsense")|| texts[i].includes("damn")) {
                emojiSection.innerHTML = "👿";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
                }   
                else {
                emojiSection.innerHTML = "🤯";
                title.style.color = 'orange';
                outline.style.borderColor = 'orange';
                console.log(analysis);
                } 
            }

            if (analysis > 0) {
            if (texts[i].includes("rip")|| texts[i].includes("rest") || texts[i].includes("angel") || texts[i].includes("die")) {
                // emojiSection.innerHTML.pop("🤯","🤮","😫", "👿","😖","😭","🥳","😉","😙","😛","😊","😍","😘","😆","😂","😄","🥰","😐", "🥹","😢","🤢","😣","😠","🙄")
                emojiSection.innerHTML = "😇";
                title.style.color = 'pink';
                outline.style.borderColor = 'pink';
                console.log(analysis);
            }

            else if (texts[i].includes("love")|| texts[i].includes("like") || texts[i].includes("cute") || texts[i].includes("sexy")) {
                emojiSection.innerHTML = "😚";
                title.style.color = 'pink';
                outline.style.borderColor = 'pink';
                console.log(analysis);
            }

            else if (texts[i].includes("cold")|| texts[i].includes("idk") || texts[i].includes("skeptical") || texts[i].includes("well")) {
                emojiSection.innerHTML = "😬";
                title.style.color = 'skyblue';
                outline.style.borderColor = 'skyblue';
                console.log(analysis);
            }

            else if (texts[i].includes("dope")|| texts[i].includes("lit") || texts[i].includes("haha") || texts[i].includes("see")) {
                emojiSection.innerHTML = "😎";
                title.style.color = 'black';
                outline.style.borderColor = 'black';
                console.log(analysis);
            }

            else if (texts[i].includes("money")|| texts[i].includes("rich") || texts[i].includes("flex") || texts[i].includes("hip")) {
                emojiSection.innerHTML = "🤑";
                title.style.color = 'black';
                outline.style.borderColor = 'black';
                console.log(analysis);
            }

            else if (texts[i].includes("secret")|| texts[i].includes("private") || texts[i].includes("shut") || texts[i].includes("shh")) {
                emojiSection.innerHTML = "🤫";
                title.style.color = 'lightgray';
                outline.style.borderColor = 'lightgray';
                console.log(analysis);
            }
            }
        


        button1.addEventListener("click", function(event){
            event.preventDefault();
            const text2 = document.getElementById('text').value;
            texts.push(text2);
            document.getElementById('text').value = ''; // clear the input field
            console.log(texts); // log the array for testing purposes 
            document.getElementById("userText").innerHTML = texts;
            texts.pop(text2); 
            });

        button2.addEventListener("click", function(event){
            event.preventDefault();
            const text2 = document.getElementById('text').value;
            texts.push(text2);
            document.getElementById('text').value = ''; // clear the input field
            console.log(texts); // log the array for testing purposes 
            document.getElementById("userText").innerHTML = texts + emojiSection.innerHTML;
            texts.pop(text2); 
            });

        }

      })
      
      .catch(err => {
        emojiSection.innerHTML = 'There was an error processing your request!'
      })


       
  }
  
  document.getElementById('text').addEventListener('keyup', submitReview);
  document.getElementById('sentiment-form').addEventListener('submit', submitReview);

//https://www.npmjs.com/package/sentiment
  
