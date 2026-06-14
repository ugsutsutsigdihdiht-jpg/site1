export interface Script {
  id: string
  name: string
  description: string
  script: string
  game: "adopt-me" | "murder-mystery-2" | "grow-a-garden-2"
}

export const scripts: Script[] = [
  // Adopt Me Scripts
  {
    id: "am-1",
    name: "PetSpawnerV2",
    description: "Spawning any pet which u want / Tradeble",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/AdoptMe/refs/heads/main/PetSpawnerV2"))()`,
    game: "adopt-me",
  },
  {
    id: "am-1-v2",
    name: "AutoFarm",
    description: "AutoFarming",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/AdoptMe/refs/heads/main/AutoFarm"))()`,
    game: "adopt-me",
  },
  {
    id: "am-2",
    name: "Pet Spawner",
    description: "Spawning any pet which u want / Tradeble",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/AdoptMe/refs/heads/main/PetSpawner"))()`,
    game: "adopt-me",
  },
  // Murder Mystery 2 Scripts
  {
    id: "mm2-1",
    name: "AutoFarm",
    description: "AutoFarming coins / Task",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/MM2/refs/heads/main/AutoFarm.lua"))()`,
    game: "murder-mystery-2",
  },
  {
    id: "mm2-2",
    name: "Item Spawner",
    description: "Spawning any item in ur inventory",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/MM2/refs/heads/main/ItemSpawner.lua"))()`,
    game: "murder-mystery-2",
  },
  {
    id: "mm2-3",
    name: "Trade Freeze",
    description: "Freeze your items in Trade",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/MM2/refs/heads/main/FreezeTrade.lua"))()`,
    game: "murder-mystery-2",
  },
  {
    id: "mm2-4",
    name: "Overdrive Hub",
    description: "BEST Hub In MM2",
    script: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RobloxScriptBY/MM2/refs/heads/main/OverdriveHub.lua"))()`,
    game: "murder-mystery-2",
  },
]
