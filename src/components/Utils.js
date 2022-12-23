const names = [
  {
    "name": "Evelyn",
    "exercise": "SCRUM",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D1-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W1D2-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W1D2-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D2-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W1D2-4",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D2-5",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D3-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D3-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D3-4",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D3-5",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 5,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W1D4-1",
    "difficultyLevel": 4,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W2D1-1",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W2D1-2",
    "difficultyLevel": 2,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W2D2-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W2D2-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W2D2-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W2D3-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W2D3-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W2D3-3",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W2D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W2D4-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W2D4-3",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W3D1-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W3D1-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W3D1-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W3D1-4",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W3D2-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W3D2-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W3D2-3",
    "difficultyLevel": 3,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W3D3-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W3D3-2",
    "difficultyLevel": 4,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W3D3-3",
    "difficultyLevel": 3,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W3D3-4",
    "difficultyLevel": 4,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W3D4-1",
    "difficultyLevel": 5,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W3D4-2",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 2,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D2-1",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D2-2",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D2-3",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D2-4",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D3-1",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D3-2",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D3-3",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D3-4",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D3-5",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 1,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W5D4-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Evelyn",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W6D1-1",
    "difficultyLevel": 5,
    "funLevel": 5
  },
  {
    "name": "Evelyn",
    "exercise": "W6D2-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Evelyn",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 5,
    "funLevel": 5
  },
  {
    "name": "Aranka",
    "exercise": "SCRUM",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W1D1-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W1D2-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W1D2-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W1D2-3",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W1D2-4",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W1D2-5",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W1D3-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W1D3-2",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W1D3-4",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W1D3-5",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W1D4-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W2D1-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W2D1-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W2D2-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W2D2-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W2D2-3",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W2D3-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W2D3-2",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W2D3-3",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W2D4-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W2D4-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W2D4-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W3D1-1",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W3D1-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W3D1-3",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W3D1-4",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D2-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D2-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D2-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D3-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W3D3-2",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D3-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D3-4",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W3D4-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W3D4-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W4D2-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W4D2-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W4D2-3",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W4D2-4",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W4D3-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W4D3-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W4D3-3",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W4D3-4",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W4D3-5",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Aranka",
    "exercise": "W5D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Aranka",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W6D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Aranka",
    "exercise": "W6D2-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Aranka",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "SCRUM",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W1D1-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W1D2-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W1D2-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W1D2-3",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W1D2-4",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W1D2-5",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W1D3-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W1D3-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W1D3-4",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W1D3-5",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W1D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W2D1-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W2D1-2",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W2D2-1",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W2D2-2",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W2D2-3",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W2D3-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W2D3-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W2D3-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W2D4-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W2D4-2",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W2D4-3",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W3D1-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W3D1-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W3D1-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W3D1-4",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W3D2-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W3D2-2",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W3D2-3",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W3D3-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W3D3-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W3D3-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W3D3-4",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W3D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W3D4-2",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W4D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W4D2-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W4D2-3",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W4D2-4",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W4D3-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W4D3-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Floris",
    "exercise": "W4D3-3",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W4D3-4",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W4D3-5",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W5D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Floris",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W6D1-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Floris",
    "exercise": "W6D2-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Floris",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "SCRUM",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W1D1-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W1D2-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W1D2-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W1D2-3",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W1D2-4",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W1D2-5",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W1D3-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W1D3-2",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W1D3-4",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W1D3-5",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W1D4-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W2D1-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W2D1-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W2D2-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W2D2-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W2D2-3",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W2D3-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W2D3-2",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W2D3-3",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W2D4-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W2D4-2",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W2D4-3",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W3D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W3D1-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W3D1-3",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W3D1-4",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W3D2-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W3D2-2",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W3D2-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W3D3-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W3D3-2",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W3D3-3",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W3D3-4",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W3D4-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W3D4-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W4D2-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W4D2-2",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W4D2-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W4D2-4",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W4D3-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W4D3-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W4D3-3",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W4D3-4",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Hector",
    "exercise": "W4D3-5",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W5D4-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Hector",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W6D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Hector",
    "exercise": "W6D2-1",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Hector",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "SCRUM",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W1D1-1",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W1D2-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W1D2-2",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W1D2-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W1D2-4",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W1D2-5",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W1D3-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W1D3-2",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W1D3-4",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W1D3-5",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W1D4-1",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W2D1-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W2D1-2",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W2D2-1",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W2D2-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W2D2-3",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W2D3-1",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W2D3-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W2D3-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W2D4-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W2D4-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W2D4-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W3D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W3D1-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W3D1-3",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W3D1-4",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W3D2-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W3D2-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W3D2-3",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W3D3-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W3D3-2",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W3D3-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W3D3-4",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W3D4-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W3D4-2",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W4D2-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W4D2-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W4D2-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W4D2-4",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W4D3-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W4D3-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Martina",
    "exercise": "W4D3-3",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W4D3-4",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W4D3-5",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Martina",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W5D4-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W6D1-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Martina",
    "exercise": "W6D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Martina",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "SCRUM",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W1D1-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W1D2-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W1D2-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W1D2-3",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W1D2-4",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W1D2-5",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W1D3-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W1D3-2",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W1D3-4",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W1D3-5",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W1D4-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W2D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W2D1-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W2D2-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W2D2-2",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W2D2-3",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W2D3-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W2D3-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W2D3-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W2D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W2D4-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W2D4-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W3D1-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W3D1-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W3D1-3",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W3D1-4",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W3D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W3D2-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W3D2-3",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W3D3-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W3D3-2",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W3D3-3",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W3D3-4",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W3D4-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W3D4-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W4D2-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W4D2-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W4D2-3",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W4D2-4",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W4D3-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W4D3-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W4D3-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W4D3-4",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W4D3-5",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Maurits",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W5D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Maurits",
    "exercise": "W6D1-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Maurits",
    "exercise": "W6D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Maurits",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "SCRUM",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W1D1-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W1D2-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W1D2-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W1D2-3",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W1D2-4",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W1D2-5",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W1D3-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W1D3-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W1D3-4",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W1D3-5",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W1D4-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W2D1-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W2D1-2",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W2D2-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W2D2-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W2D2-3",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W2D3-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W2D3-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W2D3-3",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W2D4-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W2D4-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W2D4-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W3D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W3D1-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W3D1-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W3D1-4",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W3D2-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W3D2-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W3D2-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W3D3-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W3D3-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W3D3-3",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W3D3-4",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W3D4-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W3D4-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W4D2-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W4D2-2",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W4D2-3",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W4D2-4",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W4D3-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W4D3-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W4D3-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Rahima",
    "exercise": "W4D3-4",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W4D3-5",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Rahima",
    "exercise": "W5D4-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Rahima",
    "exercise": "W6D1-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W6D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Rahima",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "SCRUM",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W1D1-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W1D2-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W1D2-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W1D2-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W1D2-4",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W1D2-5",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W1D3-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W1D3-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W1D3-4",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W1D3-5",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W1D4-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W2D1-1",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W2D1-2",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W2D2-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W2D2-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W2D2-3",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W2D3-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W2D3-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W2D3-3",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W2D4-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W2D4-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W2D4-3",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W3D1-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W3D1-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W3D1-3",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W3D1-4",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W3D2-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W3D2-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W3D2-3",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W3D3-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W3D3-2",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W3D3-3",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W3D3-4",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W3D4-1",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W3D4-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W4D2-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W4D2-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W4D2-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W4D2-4",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W4D3-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W4D3-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W4D3-3",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W4D3-4",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W4D3-5",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W5D4-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Sandra",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Sandra",
    "exercise": "W6D1-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Sandra",
    "exercise": "W6D2-1",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Sandra",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "SCRUM",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W1D1-1",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W1D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W1D2-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W1D2-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W1D2-4",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W1D2-5",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W1D3-1",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W1D3-2",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W1D3-4",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W1D3-5",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W1D4-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W2D1-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W2D1-2",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W2D2-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W2D2-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W2D2-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W2D3-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W2D3-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W2D3-3",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W2D4-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W2D4-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W2D4-3",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W3D1-1",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W3D1-2",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W3D1-3",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W3D1-4",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W3D2-1",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W3D2-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W3D2-3",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W3D3-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W3D3-2",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W3D3-3",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W3D3-4",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W3D4-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W3D4-2",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W4D2-1",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W4D2-2",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W4D2-3",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W4D2-4",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W4D3-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W4D3-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W4D3-3",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W4D3-4",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Wietske",
    "exercise": "W4D3-5",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Wietske",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W5D4-1",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Wietske",
    "exercise": "W6D1-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W6D2-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Wietske",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "SCRUM",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W1D1-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W1D2-1",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W1D2-2",
    "difficultyLevel": 1,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W1D2-3",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W1D2-4",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W1D2-5",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W1D3-1",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W1D3-2",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W1D3-4",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W1D3-5",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W1D3 - Project - Guess-the-number",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W1D4-1",
    "difficultyLevel": 4,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W1D4 - Project - Kleurentoggle",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W1D5 - Project -Galgje",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W2D1-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W2D1-2",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W2D2-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W2D2-2",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W2D2-3",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W2D3-1",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W2D3-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W2D3-3",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W2D4-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W2D4-2",
    "difficultyLevel": 4,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W2D4-3",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W2D5 - Project - Filmzoeker",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W3D1-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W3D1-2",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W3D1-3",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W3D1-4",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W3D2-1",
    "difficultyLevel": 1,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W3D2-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W3D2-3",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W3D3-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W3D3-2",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W3D3-3",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W3D3-4",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W3D4-1",
    "difficultyLevel": 2,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W3D4-2",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W3D5 - Project - Todo-List",
    "difficultyLevel": 3,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W4D2-1",
    "difficultyLevel": 2,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W4D2-2",
    "difficultyLevel": 3,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W4D2-3",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W4D2-4",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W4D3-1",
    "difficultyLevel": 3,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W4D3-2",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W4D3-3",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W4D3-4",
    "difficultyLevel": 3,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W4D3-5",
    "difficultyLevel": 2,
    "funLevel": 3
  },
  {
    "name": "Storm",
    "exercise": "W4D3 - Project - Next-Level CSS",
    "difficultyLevel": 4,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W5D4-1",
    "difficultyLevel": 2,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W5D5 - Project - Lil_Playlist",
    "difficultyLevel": 1,
    "funLevel": 2
  },
  {
    "name": "Storm",
    "exercise": "W6D1-1",
    "difficultyLevel": 4,
    "funLevel": 4
  },
  {
    "name": "Storm",
    "exercise": "W6D2-1",
    "difficultyLevel": 1,
    "funLevel": 1
  },
  {
    "name": "Storm",
    "exercise": "W6D2 - Project - Eindopdracht",
    "difficultyLevel": 3,
    "funLevel": 3
  }
]

const getRandomInteger = (from, to) => from + Math.floor(Math.random() * to);
const getRandomId = () => getRandomInteger(1, 1000000);

const Utils = () => {
  const oldArray = names;
  oldArray.forEach(function (element) {
    element.id = getRandomId();
  })
  return oldArray
}

export default Utils