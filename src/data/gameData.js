// Game data containing all scenes, dialog, and choices for the visual novel

// Import character images directly
import AlexImage from '../assets/images/characters/Alex.png';
import JordanImage from '../assets/images/characters/Jordan.png';
import FriendImage from '../assets/images/characters/Friend.png';

const gameData = {
  scenes: {
    intro: {
      background: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      dialog: {
        speaker: 'Narrator',
        text: 'In a world where chance encounters can change destinies, two strangers are about to meet...'
      },
      choices: [
        { id: 'choice1', text: 'At a bustling coffee shop', nextScene: 'coffee_shop' },
        { id: 'choice2', text: 'Through mutual friends', nextScene: 'mutual_friends' },
        { id: 'choice3', text: 'At a lively art gallery opening', nextScene: 'party' }
      ]
    },
    
    coffee_shop: {
      background: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'The coffee shop was packed that rainy afternoon. I was working on my novel when someone with an umbrella and a gentle smile walked in. Our eyes met briefly as they ordered their drink.'
      },
      choices: [
        { id: 'choice1', text: 'Jordan gathered courage and approached', nextScene: 'coffee_approach' },
        { id: 'choice2', text: 'A serendipitous coffee spill', nextScene: 'coffee_spill' }
      ]
    },
    
    coffee_approach: {
      background: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: '"Is this seat taken?" I asked, gesturing to the empty chair. "All the others seem to be occupied." That simple question led to hours of conversation about books, travel, and dreams for the future.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    coffee_spill: {
      background: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: '"I\'m so sorry!" I exclaimed as my coffee spilled across their notebook. As we scrambled to save the pages, our hands brushed against each other. That awkward moment somehow turned into exchanging phone numbers and a promise to meet again.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    mutual_friends: {
      background: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Friend',
          position: 'left',
          speaking: true,
          image: FriendImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Friend',
        text: '"There\'s someone I think you should meet," said Taylor, with that knowing smile. "You two have so much in common, it\'s almost scary."'
      },
      choices: [
        { id: 'choice1', text: 'An instant connection', nextScene: 'friends_immediate' },
        { id: 'choice2', text: 'A slow-building interest', nextScene: 'friends_shy' }
      ]
    },
    
    friends_immediate: {
      background: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'From the moment we started talking, it felt like we\'d known each other forever. We had the same taste in obscure films, finished each other\'s sentences, and couldn\'t stop laughing. Our friends joked that they became invisible once we met.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    friends_shy: {
      background: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We were both reserved at first, making small talk and stealing glances. But as the evening progressed, we found ourselves in a quiet corner, discovering shared interests in photography and hiking. By the end of the night, I found myself hoping we\'d meet again.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    party: {
      background: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'The gallery was filled with people admiring the new exhibition, but somehow, across the crowded room, our eyes met. There was something magnetic about that moment.'
      },
      choices: [
        { id: 'choice1', text: 'We discussed art all evening', nextScene: 'party_dance' },
        { id: 'choice2', text: 'We escaped to the rooftop garden', nextScene: 'party_quiet' },
        { id: 'choice3', text: 'We were introduced by the artist', nextScene: 'party_artist' }
      ]
    },
    
    party_dance: {
      background: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'We spent hours discussing the artwork, sharing our interpretations and personal connections to each piece. I was captivated not just by the art, but by the passion in your voice and the way your eyes lit up when talking about the abstract expressionist section.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    party_quiet: {
      background: 'https://images.unsplash.com/photo-1477120292453-1cad512c7c44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'The rooftop garden was a quiet escape from the buzzing gallery. Under the stars, our conversation flowed effortlessly from art to childhood memories to dreams for the future. Time seemed to stand still in that moment.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    party_artist: {
      background: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: '"You both appreciate the same elements in my work," the artist said with a knowing smile as he introduced us. What started as a polite conversation about brushstrokes and color theory quickly evolved into something much more personal. By the end of the night, we had exchanged numbers and made plans to visit another exhibition together.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'first_date' }
      ]
    },
    
    first_date: {
      background: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'Our first official date arrived, and I spent way too long deciding what to wear. I wanted everything to be perfect.'
      },
      choices: [
        { id: 'choice1', text: 'A dinner at a hidden gem restaurant', nextScene: 'date_restaurant' },
        { id: 'choice2', text: 'A picnic in the botanical gardens', nextScene: 'date_picnic' },
        { id: 'choice3', text: 'An indie film festival', nextScene: 'date_movie' },
        { id: 'choice4', text: 'A spontaneous adventure', nextScene: 'date_adventure' }
      ]
    },
    
    date_restaurant: {
      background: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I found this little place tucked away on a side street. The chef is supposed to be incredible, and the ambiance is perfect for getting to know each other better.'
      },
      choices: [
        { id: 'choice1', text: 'Share personal stories over dinner', nextScene: 'restaurant_stories' },
        { id: 'choice2', text: 'Keep the conversation light and fun', nextScene: 'restaurant_light' }
      ]
    },
    
    restaurant_stories: {
      background: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'As the candlelight flickered between us, we shared stories from our childhoods, our biggest fears, and the dreams that kept us going. There was something about Alex that made it easy to open up. By dessert, I felt like I\'d known them for years, not days.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    restaurant_light: {
      background: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We kept things light, trading jokes and funny stories. Alex had me laughing so hard I nearly choked on my pasta. There was an ease between us, a natural chemistry that made the evening fly by. Before I knew it, we were the last ones in the restaurant.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    date_picnic: {
      background: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I packed some homemade sandwiches, fresh fruit, and a bottle of sparkling cider. I thought we could enjoy the spring blooms while getting to know each other better.'
      },
      choices: [
        { id: 'choice1', text: 'Take a leisurely stroll through the gardens', nextScene: 'picnic_stroll' },
        { id: 'choice2', text: 'Find a quiet spot under a flowering tree', nextScene: 'picnic_quiet' }
      ]
    },
    
    picnic_stroll: {
      background: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We wandered through the gardens, pointing out our favorite flowers and plants. Our hands brushed against each other as we walked, and eventually, Alex took my hand. It felt so natural, like our hands were meant to fit together.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    picnic_quiet: {
      background: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We found a perfect spot under a cherry blossom tree in full bloom. As we ate, petals occasionally floated down around us like pink snow. There was something magical about the moment, sitting there with Alex, talking about everything and nothing.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    date_movie: {
      background: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I thought we could check out this indie film festival. They\'re showing some really interesting international films that aren\'t available anywhere else.'
      },
      choices: [
        { id: 'choice1', text: 'Choose a thought-provoking drama', nextScene: 'movie_drama' },
        { id: 'choice2', text: 'Choose a quirky comedy', nextScene: 'movie_comedy' }
      ]
    },
    
    movie_drama: {
      background: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'The film was emotionally intense, exploring themes of love, loss, and redemption. Afterward, we sat in a nearby café for hours, discussing our interpretations and how it related to our own lives. I was impressed by Alex\'s depth of thought and emotional intelligence.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    movie_comedy: {
      background: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'The film was hilarious in the most unexpected ways. We laughed until our sides hurt, and even days later, we were still texting each other quotes from the movie. It became our own private language of inside jokes.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    date_adventure: {
      background: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'Let\'s do something unexpected. No reservations, no plans—just follow our instincts and see where the night takes us.'
      },
      choices: [
        { id: 'choice1', text: 'Explore the night market', nextScene: 'adventure_market' },
        { id: 'choice2', text: 'Go stargazing on the hillside', nextScene: 'adventure_stars' }
      ]
    },
    
    adventure_market: {
      background: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'The night market was alive with colors, smells, and sounds. We sampled street food from a dozen different cultures, tried on ridiculous hats at a vintage stall, and even had our fortunes told by an elderly woman who winked at us and said we were destined for an interesting journey together.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    adventure_stars: {
      background: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We drove to the hills outside the city with a blanket and thermos of hot chocolate. Lying side by side under the vast canopy of stars, our conversation drifted from constellations to childhood dreams to philosophy. When Alex reached for my hand in the darkness, I felt a connection that transcended the physical—like our souls were recognizing each other.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'second_meeting' }
      ]
    },
    
    second_meeting: {
      background: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'In the weeks that followed, Alex and Jordan saw each other regularly. Their connection grew stronger with each meeting.'
      },
      choices: [
        { id: 'choice1', text: 'Take things slow and steady', nextScene: 'relationship_slow' },
        { id: 'choice2', text: 'Fall deeply and quickly', nextScene: 'relationship_fast' },
        { id: 'choice3', text: 'Focus on building friendship first', nextScene: 'relationship_friends' },
        { id: 'choice4', text: 'Balance romance with independence', nextScene: 'relationship_balance' }
      ]
    },
    
    relationship_slow: {
      background: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We took our time getting to know each other, savoring each new discovery. Weekend hikes, quiet dinners, long phone calls that lasted until dawn. There was no rush—we both knew we were building something worth taking time for.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'challenge' }
      ]
    },
    
    relationship_fast: {
      background: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'It was like a whirlwind. Within a month, we were practically inseparable. Our friends teased us about the honeymoon phase, but we didn\'t care. When you know, you know.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'challenge' }
      ]
    },
    
    relationship_friends: {
      background: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'We decided to build a strong foundation of friendship first. Game nights with our friend groups, helping each other move furniture, being there through work stress and family drama. The romantic feelings were there, but we let them simmer slowly as our trust in each other grew.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'challenge' }
      ]
    },
    
    relationship_balance: {
      background: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'We found a rhythm that worked for us—spending quality time together while maintaining our individual lives. I still had my weekly art class, Jordan kept their Sunday hiking group, but we created space for each other that felt natural and unforced. It was a healthy balance that let us grow together and separately.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'challenge' }
      ]
    },
    
    challenge: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'Six months into their relationship, Alex and Jordan faced their first significant challenge...'
      },
      choices: [
        { id: 'choice1', text: 'A career opportunity in another city', nextScene: 'challenge_distance' },
        { id: 'choice2', text: 'A misunderstanding that leads to conflict', nextScene: 'challenge_conflict' },
        { id: 'choice3', text: 'An ex returns, causing complications', nextScene: 'challenge_ex' }
      ]
    },
    
    challenge_distance: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I\'ve been offered my dream job, but it\'s in another city. It\'s a six-hour drive away. I don\'t know what to do. The last thing I want is to be apart from you, but this opportunity might not come again.'
      },
      choices: [
        { id: 'choice1', text: 'Support Alex\'s career move', nextScene: 'distance_support' },
        { id: 'choice2', text: 'Ask Alex to consider local opportunities', nextScene: 'distance_stay' },
        { id: 'choice3', text: 'Suggest moving together', nextScene: 'distance_move_together' }
      ]
    },
    
    distance_support: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'You have to take it. We\'ll make it work. Weekends, video calls, and maybe I can look for opportunities there too, eventually. This is your dream, and I want to see you achieve it.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_distance_positive' },
        { id: 'choice2', text: 'Discuss a timeline for reuniting', nextScene: 'distance_timeline' }
      ]
    },
    
    distance_stay: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'I know this is a great opportunity, but have you looked at similar positions here? Long-distance is so hard, and what we have is special. I\'m afraid of losing that.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_distance_challenge' },
        { id: 'choice2', text: 'Alex feels pressured', nextScene: 'distance_pressure' }
      ]
    },
    
    distance_move_together: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'What if I move with you? I can look for jobs there too. It\'s a big step, but I think we\'re ready for it. We could start a new chapter together.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_distance_positive' },
        { id: 'choice2', text: 'Discuss the practicalities first', nextScene: 'distance_timeline' }
      ]
    },
    
    challenge_conflict: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'I saw the messages on your phone. I wasn\'t snooping, they just popped up. Who\'s Jamie, and why are you making plans to meet up without telling me?'
      },
      choices: [
        { id: 'choice1', text: 'Explain calmly and honestly', nextScene: 'conflict_calm' },
        { id: 'choice2', text: 'Get defensive about privacy', nextScene: 'conflict_defensive' },
        { id: 'choice3', text: 'Admit to emotional cheating', nextScene: 'conflict_admit' }
      ]
    },
    
    conflict_calm: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'Jamie is my cousin who\'s coming to town next week. I was actually planning a surprise for your birthday, and Jamie was helping me organize it. I wanted it to be special.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_conflict_positive' }
      ]
    },
    
    conflict_defensive: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I can\'t believe you\'re checking my messages. Don\'t you trust me at all? Jamie is just a friend, and I don\'t need to report every conversation I have to you.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_conflict_challenge' }
      ]
    },
    
    challenge_ex: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'My ex reached out to me yesterday. They\'re going through a hard time and want to meet up to talk. I haven\'t responded yet. I wanted to tell you first.'
      },
      choices: [
        { id: 'choice1', text: 'Express trust in Jordan\'s judgment', nextScene: 'ex_trust' },
        { id: 'choice2', text: 'Express concern about the meeting', nextScene: 'ex_concern' },
        { id: 'choice3', text: 'Suggest going together', nextScene: 'ex_together' }
      ]
    },
    
    ex_trust: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I appreciate you telling me. I trust you completely, and if you think meeting up would help them, then you should. Just keep me in the loop, okay?'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_ex_positive' }
      ]
    },
    
    ex_concern: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'I\'m not sure that\'s a good idea. They might be using this as an excuse to try to get back together. And why now, when things are going so well for us?'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_ex_challenge' }
      ]
    },
    
    ex_together: {
      background: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'What if we meet them together? That way, I can be there for support, and it might make the situation less awkward for everyone. Plus, I\'d like to know who was important to you before me.'
      },
      choices: [
        { id: 'choice1', text: 'Continue the story', nextScene: 'resolution_ex_positive' }
      ]
    },
    
    resolution_distance_positive: {
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'The next year wasn\'t easy, but Alex and Jordan made it work. Weekend visits, nightly video calls, and surprise care packages kept their connection strong. Eventually, Jordan found a job opportunity in Alex\'s new city, and they moved in together.'
      },
      choices: [
        { id: 'choice1', text: 'Continue to the epilogue', nextScene: 'epilogue_happy' }
      ]
    },
    
    resolution_distance_challenge: {
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'After much consideration, Alex turned down the job offer to stay. While things were good for a while, there was always an undercurrent of resentment. They worked through it in couples therapy, learning to better communicate about their needs and dreams.'
      },
      choices: [
        { id: 'choice1', text: 'Continue to the epilogue', nextScene: 'epilogue_bittersweet'}
      ]
    },
    
    resolution_conflict_positive: {
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'I feel so silly now. Thank you for being honest with me. It means a lot that you were planning something special instead of getting upset that I jumped to conclusions.'
      },
      choices: [
        { id: 'choice1', text: 'Continue to the epilogue', nextScene: 'epilogue_happy' }
      ]
    },
    
    resolution_conflict_challenge: {
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'The argument escalated, with both Alex and Jordan saying things they later regretted. They didn\'t speak for three days. When they finally did talk, they realized they needed to work on trust and communication. It was a painful but necessary growth moment for their relationship.'
      },
      choices: [
        { id: 'choice1', text: 'Continue to the epilogue', nextScene: 'epilogue_bittersweet' }
      ]
    },
    
    resolution_ex_positive: {
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        },
        {
          name: 'Alex',
          position: 'right',
          speaking: false,
          image: AlexImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'Meeting my ex for coffee actually gave me closure I didn\'t know I needed. And seeing them only confirmed what I already knew—what we have is special, Alex. I\'ve never felt so secure in a relationship before.'
      },
      choices: [
        { id: 'choice1', text: 'Continue to the epilogue', nextScene: 'epilogue_happy' }
      ]
    },
    
    resolution_ex_challenge: {
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'Jordan decided not to meet the ex, respecting Alex\'s concerns. But the situation made them both realize they had different views on maintaining friendships with exes. They had several honest conversations about boundaries, eventually reaching a compromise they could both live with.'
      },
      choices: [
        { id: 'choice1', text: 'Continue to the epilogue', nextScene: 'epilogue_compromise' }
      ]
    },
    
    epilogue_happy: {
      background: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'Two years later...'
      },
      choices: [
        { id: 'choice1', text: 'Continue', nextScene: 'ending_happy' }
      ]
    },
    
    ending_happy: {
      background: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'Remember when we first met? I never imagined that chance encounter would lead to this—a home together, a life we\'ve built. Every challenge we faced only made us stronger. I can\'t wait to see what the future holds for us.'
      },
      choices: [
        { id: 'choice1', text: 'The End - Play Again?', nextScene: 'intro' }
      ]
    },
    
    epilogue_bittersweet: {
      background: 'https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'One year later...'
      },
      choices: [
        { id: 'choice1', text: 'Continue', nextScene: 'ending_bittersweet' }
      ]
    },
    
    ending_bittersweet: {
      background: 'https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Jordan',
          position: 'left',
          speaking: true,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Jordan',
        text: 'Alex and I tried our best, and for a while, it was beautiful. But sometimes love isn\'t enough when you want different things from life. We\'ve decided to go our separate ways, but I\'ll always cherish what we had. Some people are meant to change you, not stay with you forever.'
      },
      choices: [
        { id: 'choice1', text: 'The End - Play Again?', nextScene: 'intro' }
      ]
    },
    
    epilogue_compromise: {
      background: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
       
      dialog: {
        speaker: 'Narrator',
        text: 'Eighteen months later...'
      },
      choices: [
        { id: 'choice1', text: 'Continue', nextScene: 'ending_compromise' }
      ]
    },
    
    ending_compromise: {
      background: 'https://images.unsplash.com/photo-1522158637959-30ab8018e198?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      characters: [
        {
          name: 'Alex',
          position: 'right',
          speaking: true,
          image: AlexImage
        },
        {
          name: 'Jordan',
          position: 'left',
          speaking: false,
          image: JordanImage
        }
      ],
      dialog: {
        speaker: 'Alex',
        text: 'Relationships are about compromise, aren\'t they? We\'ve had our ups and downs, but I think we\'ve found a balance that works for us. We\'re different people, but that\'s what makes us interesting. I\'ve learned so much about patience and understanding from you.'
      },
      choices: [
        { id: 'choice1', text: 'The End - Play Again?', nextScene: 'intro' }
      ]
    }
  }
};

export default gameData;