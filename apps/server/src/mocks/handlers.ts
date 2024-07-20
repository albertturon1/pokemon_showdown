import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://pokeapi.co/api/v2/pokemon/ditto", () => {
		return HttpResponse.json({
			abilities: [
				{
					ability: {
						name: "limber",
						url: "https://pokeapi.co/api/v2/ability/7/",
					},
					is_hidden: false,
					slot: 1,
				},
				{
					ability: {
						name: "imposter",
						url: "https://pokeapi.co/api/v2/ability/150/",
					},
					is_hidden: true,
					slot: 3,
				},
			],
			base_experience: 101,
			cries: {
				latest:
					"https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
				legacy:
					"https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg",
			},
			forms: [
				{
					name: "ditto",
					url: "https://pokeapi.co/api/v2/pokemon-form/132/",
				},
			],
			game_indices: [
				{
					game_index: 76,
					version: {
						name: "red",
						url: "https://pokeapi.co/api/v2/version/1/",
					},
				},
				{
					game_index: 76,
					version: {
						name: "blue",
						url: "https://pokeapi.co/api/v2/version/2/",
					},
				},
				{
					game_index: 76,
					version: {
						name: "yellow",
						url: "https://pokeapi.co/api/v2/version/3/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "gold",
						url: "https://pokeapi.co/api/v2/version/4/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "silver",
						url: "https://pokeapi.co/api/v2/version/5/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "crystal",
						url: "https://pokeapi.co/api/v2/version/6/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "ruby",
						url: "https://pokeapi.co/api/v2/version/7/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "sapphire",
						url: "https://pokeapi.co/api/v2/version/8/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "emerald",
						url: "https://pokeapi.co/api/v2/version/9/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "firered",
						url: "https://pokeapi.co/api/v2/version/10/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "leafgreen",
						url: "https://pokeapi.co/api/v2/version/11/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "diamond",
						url: "https://pokeapi.co/api/v2/version/12/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "pearl",
						url: "https://pokeapi.co/api/v2/version/13/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "platinum",
						url: "https://pokeapi.co/api/v2/version/14/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "heartgold",
						url: "https://pokeapi.co/api/v2/version/15/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "soulsilver",
						url: "https://pokeapi.co/api/v2/version/16/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "black",
						url: "https://pokeapi.co/api/v2/version/17/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "white",
						url: "https://pokeapi.co/api/v2/version/18/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "black-2",
						url: "https://pokeapi.co/api/v2/version/21/",
					},
				},
				{
					game_index: 132,
					version: {
						name: "white-2",
						url: "https://pokeapi.co/api/v2/version/22/",
					},
				},
			],
			height: 3,
			held_items: [
				{
					item: {
						name: "metal-powder",
						url: "https://pokeapi.co/api/v2/item/234/",
					},
					version_details: [
						{
							rarity: 5,
							version: {
								name: "ruby",
								url: "https://pokeapi.co/api/v2/version/7/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "sapphire",
								url: "https://pokeapi.co/api/v2/version/8/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "emerald",
								url: "https://pokeapi.co/api/v2/version/9/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "firered",
								url: "https://pokeapi.co/api/v2/version/10/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "leafgreen",
								url: "https://pokeapi.co/api/v2/version/11/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "diamond",
								url: "https://pokeapi.co/api/v2/version/12/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "pearl",
								url: "https://pokeapi.co/api/v2/version/13/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "platinum",
								url: "https://pokeapi.co/api/v2/version/14/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "heartgold",
								url: "https://pokeapi.co/api/v2/version/15/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "soulsilver",
								url: "https://pokeapi.co/api/v2/version/16/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "black",
								url: "https://pokeapi.co/api/v2/version/17/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "white",
								url: "https://pokeapi.co/api/v2/version/18/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "black-2",
								url: "https://pokeapi.co/api/v2/version/21/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "white-2",
								url: "https://pokeapi.co/api/v2/version/22/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "x",
								url: "https://pokeapi.co/api/v2/version/23/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "y",
								url: "https://pokeapi.co/api/v2/version/24/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "omega-ruby",
								url: "https://pokeapi.co/api/v2/version/25/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version/26/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "sun",
								url: "https://pokeapi.co/api/v2/version/27/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "moon",
								url: "https://pokeapi.co/api/v2/version/28/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "ultra-sun",
								url: "https://pokeapi.co/api/v2/version/29/",
							},
						},
						{
							rarity: 5,
							version: {
								name: "ultra-moon",
								url: "https://pokeapi.co/api/v2/version/30/",
							},
						},
					],
				},
				{
					item: {
						name: "quick-powder",
						url: "https://pokeapi.co/api/v2/item/251/",
					},
					version_details: [
						{
							rarity: 50,
							version: {
								name: "diamond",
								url: "https://pokeapi.co/api/v2/version/12/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "pearl",
								url: "https://pokeapi.co/api/v2/version/13/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "platinum",
								url: "https://pokeapi.co/api/v2/version/14/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "heartgold",
								url: "https://pokeapi.co/api/v2/version/15/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "soulsilver",
								url: "https://pokeapi.co/api/v2/version/16/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "black",
								url: "https://pokeapi.co/api/v2/version/17/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "white",
								url: "https://pokeapi.co/api/v2/version/18/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "black-2",
								url: "https://pokeapi.co/api/v2/version/21/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "white-2",
								url: "https://pokeapi.co/api/v2/version/22/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "x",
								url: "https://pokeapi.co/api/v2/version/23/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "y",
								url: "https://pokeapi.co/api/v2/version/24/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "omega-ruby",
								url: "https://pokeapi.co/api/v2/version/25/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version/26/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "sun",
								url: "https://pokeapi.co/api/v2/version/27/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "moon",
								url: "https://pokeapi.co/api/v2/version/28/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "ultra-sun",
								url: "https://pokeapi.co/api/v2/version/29/",
							},
						},
						{
							rarity: 50,
							version: {
								name: "ultra-moon",
								url: "https://pokeapi.co/api/v2/version/30/",
							},
						},
					],
				},
			],
			id: 132,
			is_default: true,
			location_area_encounters:
				"https://pokeapi.co/api/v2/pokemon/132/encounters",
			moves: [
				{
					move: {
						name: "transform",
						url: "https://pokeapi.co/api/v2/move/144/",
					},
					version_group_details: [
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "red-blue",
								url: "https://pokeapi.co/api/v2/version-group/1/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "yellow",
								url: "https://pokeapi.co/api/v2/version-group/2/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "gold-silver",
								url: "https://pokeapi.co/api/v2/version-group/3/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "crystal",
								url: "https://pokeapi.co/api/v2/version-group/4/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ruby-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/5/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "emerald",
								url: "https://pokeapi.co/api/v2/version-group/6/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "firered-leafgreen",
								url: "https://pokeapi.co/api/v2/version-group/7/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "diamond-pearl",
								url: "https://pokeapi.co/api/v2/version-group/8/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "platinum",
								url: "https://pokeapi.co/api/v2/version-group/9/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "heartgold-soulsilver",
								url: "https://pokeapi.co/api/v2/version-group/10/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "black-white",
								url: "https://pokeapi.co/api/v2/version-group/11/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "colosseum",
								url: "https://pokeapi.co/api/v2/version-group/12/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "xd",
								url: "https://pokeapi.co/api/v2/version-group/13/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "black-2-white-2",
								url: "https://pokeapi.co/api/v2/version-group/14/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "lets-go-pikachu-lets-go-eevee",
								url: "https://pokeapi.co/api/v2/version-group/19/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "brilliant-diamond-and-shining-pearl",
								url: "https://pokeapi.co/api/v2/version-group/23/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
			],
			name: "ditto",
			order: 214,
			past_abilities: [],
			past_types: [],
			species: {
				name: "ditto",
				url: "https://pokeapi.co/api/v2/pokemon-species/132/",
			},
			sprites: {
				back_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
				back_female: null,
				back_shiny:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
				back_shiny_female: null,
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
				front_female: null,
				front_shiny:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
				front_shiny_female: null,
				other: {
					dream_world: {
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
						front_female: null,
					},
					home: {
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
						front_female: null,
						front_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
						front_shiny_female: null,
					},
					"official-artwork": {
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
						front_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
					},
					showdown: {
						back_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/132.gif",
						back_female: null,
						back_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/132.gif",
						back_shiny_female: null,
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/132.gif",
						front_female: null,
						front_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/132.gif",
						front_shiny_female: null,
					},
				},
				versions: {
					"generation-i": {
						"red-blue": {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png",
							back_gray:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png",
							back_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
							front_gray:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png",
							front_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png",
						},
						yellow: {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png",
							back_gray:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png",
							back_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png",
							front_gray:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png",
							front_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/132.png",
						},
					},
					"generation-ii": {
						crystal: {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png",
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png",
							back_shiny_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/132.png",
							back_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png",
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png",
							front_shiny_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/132.png",
							front_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png",
						},
						gold: {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png",
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png",
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png",
							front_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/132.png",
						},
						silver: {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png",
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png",
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png",
							front_transparent:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/132.png",
						},
					},
					"generation-iii": {
						emerald: {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png",
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png",
						},
						"firered-leafgreen": {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png",
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png",
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png",
						},
						"ruby-sapphire": {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png",
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png",
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png",
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png",
						},
					},
					"generation-iv": {
						"diamond-pearl": {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png",
							back_female: null,
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png",
							back_shiny_female: null,
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png",
							front_shiny_female: null,
						},
						"heartgold-soulsilver": {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png",
							back_female: null,
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png",
							back_shiny_female: null,
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png",
							front_shiny_female: null,
						},
						platinum: {
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png",
							back_female: null,
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png",
							back_shiny_female: null,
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png",
							front_shiny_female: null,
						},
					},
					"generation-v": {
						"black-white": {
							animated: {
								back_default:
									"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
								back_female: null,
								back_shiny:
									"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif",
								back_shiny_female: null,
								front_default:
									"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
								front_female: null,
								front_shiny:
									"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
								front_shiny_female: null,
							},
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png",
							back_female: null,
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png",
							back_shiny_female: null,
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png",
							front_shiny_female: null,
						},
					},
					"generation-vi": {
						"omegaruby-alphasapphire": {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png",
							front_shiny_female: null,
						},
						"x-y": {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png",
							front_shiny_female: null,
						},
					},
					"generation-vii": {
						icons: {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png",
							front_female: null,
						},
						"ultra-sun-ultra-moon": {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png",
							front_shiny_female: null,
						},
					},
					"generation-viii": {
						icons: {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png",
							front_female: null,
						},
					},
				},
			},
			stats: [
				{
					base_stat: 48,
					effort: 1,
					stat: {
						name: "hp",
						url: "https://pokeapi.co/api/v2/stat/1/",
					},
				},
				{
					base_stat: 48,
					effort: 0,
					stat: {
						name: "attack",
						url: "https://pokeapi.co/api/v2/stat/2/",
					},
				},
				{
					base_stat: 48,
					effort: 0,
					stat: {
						name: "defense",
						url: "https://pokeapi.co/api/v2/stat/3/",
					},
				},
				{
					base_stat: 48,
					effort: 0,
					stat: {
						name: "special-attack",
						url: "https://pokeapi.co/api/v2/stat/4/",
					},
				},
				{
					base_stat: 48,
					effort: 0,
					stat: {
						name: "special-defense",
						url: "https://pokeapi.co/api/v2/stat/5/",
					},
				},
				{
					base_stat: 48,
					effort: 0,
					stat: {
						name: "speed",
						url: "https://pokeapi.co/api/v2/stat/6/",
					},
				},
			],
			types: [
				{
					slot: 1,
					type: {
						name: "normal",
						url: "https://pokeapi.co/api/v2/type/1/",
					},
				},
			],
			weight: 40,
		});
	}),
	http.get("https://pokeapi.co/api/v2/pokemon/phantump", () => {
		return HttpResponse.json({
			abilities: [
				{
					ability: {
						name: "natural-cure",
						url: "https://pokeapi.co/api/v2/ability/30/",
					},
					is_hidden: false,
					slot: 1,
				},
				{
					ability: {
						name: "frisk",
						url: "https://pokeapi.co/api/v2/ability/119/",
					},
					is_hidden: false,
					slot: 2,
				},
				{
					ability: {
						name: "harvest",
						url: "https://pokeapi.co/api/v2/ability/139/",
					},
					is_hidden: true,
					slot: 3,
				},
			],
			base_experience: 62,
			cries: {
				latest:
					"https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/708.ogg",
				legacy: null,
			},
			forms: [
				{
					name: "phantump",
					url: "https://pokeapi.co/api/v2/pokemon-form/708/",
				},
			],
			game_indices: [],
			height: 4,
			held_items: [],
			id: 708,
			is_default: true,
			location_area_encounters:
				"https://pokeapi.co/api/v2/pokemon/708/encounters",
			moves: [
				{
					move: {
						name: "cut",
						url: "https://pokeapi.co/api/v2/move/15/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
					],
				},
				{
					move: {
						name: "tackle",
						url: "https://pokeapi.co/api/v2/move/33/",
					},
					version_group_details: [
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "disable",
						url: "https://pokeapi.co/api/v2/move/50/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "strength",
						url: "https://pokeapi.co/api/v2/move/70/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
					],
				},
				{
					move: {
						name: "leech-seed",
						url: "https://pokeapi.co/api/v2/move/73/",
					},
					version_group_details: [
						{
							level_learned_at: 23,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 23,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 23,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 23,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 8,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 8,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "growth",
						url: "https://pokeapi.co/api/v2/move/74/",
					},
					version_group_details: [
						{
							level_learned_at: 8,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 8,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 8,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 8,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 24,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 24,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "solar-beam",
						url: "https://pokeapi.co/api/v2/move/76/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "dig",
						url: "https://pokeapi.co/api/v2/move/91/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "toxic",
						url: "https://pokeapi.co/api/v2/move/92/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "psychic",
						url: "https://pokeapi.co/api/v2/move/94/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "night-shade",
						url: "https://pokeapi.co/api/v2/move/101/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "double-team",
						url: "https://pokeapi.co/api/v2/move/104/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "confuse-ray",
						url: "https://pokeapi.co/api/v2/move/109/",
					},
					version_group_details: [
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 12,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 12,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "reflect",
						url: "https://pokeapi.co/api/v2/move/115/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "dream-eater",
						url: "https://pokeapi.co/api/v2/move/138/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "rest",
						url: "https://pokeapi.co/api/v2/move/156/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "rock-slide",
						url: "https://pokeapi.co/api/v2/move/157/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "substitute",
						url: "https://pokeapi.co/api/v2/move/164/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "thief",
						url: "https://pokeapi.co/api/v2/move/168/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "snore",
						url: "https://pokeapi.co/api/v2/move/173/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
					],
				},
				{
					move: {
						name: "curse",
						url: "https://pokeapi.co/api/v2/move/174/",
					},
					version_group_details: [
						{
							level_learned_at: 28,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 28,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 28,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 28,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 32,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 32,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "spite",
						url: "https://pokeapi.co/api/v2/move/180/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "protect",
						url: "https://pokeapi.co/api/v2/move/182/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "feint-attack",
						url: "https://pokeapi.co/api/v2/move/185/",
					},
					version_group_details: [
						{
							level_learned_at: 19,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 19,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 19,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 19,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "destiny-bond",
						url: "https://pokeapi.co/api/v2/move/194/",
					},
					version_group_details: [
						{
							level_learned_at: 39,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 39,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 39,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 39,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 48,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 48,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "giga-drain",
						url: "https://pokeapi.co/api/v2/move/202/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "endure",
						url: "https://pokeapi.co/api/v2/move/203/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "swagger",
						url: "https://pokeapi.co/api/v2/move/207/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "attract",
						url: "https://pokeapi.co/api/v2/move/213/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
					],
				},
				{
					move: {
						name: "sleep-talk",
						url: "https://pokeapi.co/api/v2/move/214/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "return",
						url: "https://pokeapi.co/api/v2/move/216/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "frustration",
						url: "https://pokeapi.co/api/v2/move/218/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "safeguard",
						url: "https://pokeapi.co/api/v2/move/219/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
					],
				},
				{
					move: {
						name: "pain-split",
						url: "https://pokeapi.co/api/v2/move/220/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "hidden-power",
						url: "https://pokeapi.co/api/v2/move/237/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "rain-dance",
						url: "https://pokeapi.co/api/v2/move/240/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "sunny-day",
						url: "https://pokeapi.co/api/v2/move/241/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "psych-up",
						url: "https://pokeapi.co/api/v2/move/244/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "shadow-ball",
						url: "https://pokeapi.co/api/v2/move/247/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "rock-smash",
						url: "https://pokeapi.co/api/v2/move/249/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
					],
				},
				{
					move: {
						name: "will-o-wisp",
						url: "https://pokeapi.co/api/v2/move/261/",
					},
					version_group_details: [
						{
							level_learned_at: 31,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 31,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 31,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 31,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 16,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 16,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "facade",
						url: "https://pokeapi.co/api/v2/move/263/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "nature-power",
						url: "https://pokeapi.co/api/v2/move/267/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "trick",
						url: "https://pokeapi.co/api/v2/move/271/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "role-play",
						url: "https://pokeapi.co/api/v2/move/272/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "ingrain",
						url: "https://pokeapi.co/api/v2/move/275/",
					},
					version_group_details: [
						{
							level_learned_at: 13,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 13,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 13,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 13,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 40,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 40,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "magic-coat",
						url: "https://pokeapi.co/api/v2/move/277/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "skill-swap",
						url: "https://pokeapi.co/api/v2/move/285/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "imprison",
						url: "https://pokeapi.co/api/v2/move/286/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "grudge",
						url: "https://pokeapi.co/api/v2/move/288/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
					],
				},
				{
					move: {
						name: "secret-power",
						url: "https://pokeapi.co/api/v2/move/290/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
					],
				},
				{
					move: {
						name: "astonish",
						url: "https://pokeapi.co/api/v2/move/310/",
					},
					version_group_details: [
						{
							level_learned_at: 5,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 5,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 5,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 5,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 1,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "magical-leaf",
						url: "https://pokeapi.co/api/v2/move/345/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "worry-seed",
						url: "https://pokeapi.co/api/v2/move/388/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "sucker-punch",
						url: "https://pokeapi.co/api/v2/move/389/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "poison-jab",
						url: "https://pokeapi.co/api/v2/move/398/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "dark-pulse",
						url: "https://pokeapi.co/api/v2/move/399/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "seed-bomb",
						url: "https://pokeapi.co/api/v2/move/402/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "energy-ball",
						url: "https://pokeapi.co/api/v2/move/412/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "shadow-claw",
						url: "https://pokeapi.co/api/v2/move/421/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "trick-room",
						url: "https://pokeapi.co/api/v2/move/433/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "grass-knot",
						url: "https://pokeapi.co/api/v2/move/447/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "wood-hammer",
						url: "https://pokeapi.co/api/v2/move/452/",
					},
					version_group_details: [
						{
							level_learned_at: 49,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 49,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 49,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 49,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 44,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 44,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "telekinesis",
						url: "https://pokeapi.co/api/v2/move/477/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "foul-play",
						url: "https://pokeapi.co/api/v2/move/492/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "round",
						url: "https://pokeapi.co/api/v2/move/496/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
					],
				},
				{
					move: {
						name: "ally-switch",
						url: "https://pokeapi.co/api/v2/move/502/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "hex",
						url: "https://pokeapi.co/api/v2/move/506/",
					},
					version_group_details: [
						{
							level_learned_at: 20,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 20,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "bestow",
						url: "https://pokeapi.co/api/v2/move/516/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "bulldoze",
						url: "https://pokeapi.co/api/v2/move/523/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "horn-leech",
						url: "https://pokeapi.co/api/v2/move/532/",
					},
					version_group_details: [
						{
							level_learned_at: 54,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 54,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 54,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 54,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 28,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 28,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "phantom-force",
						url: "https://pokeapi.co/api/v2/move/566/",
					},
					version_group_details: [
						{
							level_learned_at: 45,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 45,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 45,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 45,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 36,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 36,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "forests-curse",
						url: "https://pokeapi.co/api/v2/move/571/",
					},
					version_group_details: [
						{
							level_learned_at: 35,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 35,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 35,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 35,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 52,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 52,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "grassy-terrain",
						url: "https://pokeapi.co/api/v2/move/580/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "confide",
						url: "https://pokeapi.co/api/v2/move/590/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "venom-drench",
						url: "https://pokeapi.co/api/v2/move/599/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "x-y",
								url: "https://pokeapi.co/api/v2/version-group/15/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "omega-ruby-alpha-sapphire",
								url: "https://pokeapi.co/api/v2/version-group/16/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "sun-moon",
								url: "https://pokeapi.co/api/v2/version-group/17/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
					],
				},
				{
					move: {
						name: "power-up-punch",
						url: "https://pokeapi.co/api/v2/move/612/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "egg",
								url: "https://pokeapi.co/api/v2/move-learn-method/2/",
							},
							version_group: {
								name: "ultra-sun-ultra-moon",
								url: "https://pokeapi.co/api/v2/version-group/18/",
							},
						},
					],
				},
				{
					move: {
						name: "branch-poke",
						url: "https://pokeapi.co/api/v2/move/785/",
					},
					version_group_details: [
						{
							level_learned_at: 4,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 4,
							move_learn_method: {
								name: "level-up",
								url: "https://pokeapi.co/api/v2/move-learn-method/1/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "grassy-glide",
						url: "https://pokeapi.co/api/v2/move/803/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "skitter-smack",
						url: "https://pokeapi.co/api/v2/move/806/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "lash-out",
						url: "https://pokeapi.co/api/v2/move/808/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "poltergeist",
						url: "https://pokeapi.co/api/v2/move/809/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "tutor",
								url: "https://pokeapi.co/api/v2/move-learn-method/3/",
							},
							version_group: {
								name: "sword-shield",
								url: "https://pokeapi.co/api/v2/version-group/20/",
							},
						},
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "tera-blast",
						url: "https://pokeapi.co/api/v2/move/851/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
				{
					move: {
						name: "trailblaze",
						url: "https://pokeapi.co/api/v2/move/885/",
					},
					version_group_details: [
						{
							level_learned_at: 0,
							move_learn_method: {
								name: "machine",
								url: "https://pokeapi.co/api/v2/move-learn-method/4/",
							},
							version_group: {
								name: "scarlet-violet",
								url: "https://pokeapi.co/api/v2/version-group/25/",
							},
						},
					],
				},
			],
			name: "phantump",
			order: 842,
			past_abilities: [],
			past_types: [],
			species: {
				name: "phantump",
				url: "https://pokeapi.co/api/v2/pokemon-species/708/",
			},
			sprites: {
				back_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/708.png",
				back_female: null,
				back_shiny:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/708.png",
				back_shiny_female: null,
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
				front_female: null,
				front_shiny:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/708.png",
				front_shiny_female: null,
				other: {
					dream_world: {
						front_default: null,
						front_female: null,
					},
					home: {
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/708.png",
						front_female: null,
						front_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/708.png",
						front_shiny_female: null,
					},
					"official-artwork": {
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
						front_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/708.png",
					},
					showdown: {
						back_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/708.gif",
						back_female: null,
						back_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/708.gif",
						back_shiny_female: null,
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/708.gif",
						front_female: null,
						front_shiny:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/708.gif",
						front_shiny_female: null,
					},
				},
				versions: {
					"generation-i": {
						"red-blue": {
							back_default: null,
							back_gray: null,
							back_transparent: null,
							front_default: null,
							front_gray: null,
							front_transparent: null,
						},
						yellow: {
							back_default: null,
							back_gray: null,
							back_transparent: null,
							front_default: null,
							front_gray: null,
							front_transparent: null,
						},
					},
					"generation-ii": {
						crystal: {
							back_default: null,
							back_shiny: null,
							back_shiny_transparent: null,
							back_transparent: null,
							front_default: null,
							front_shiny: null,
							front_shiny_transparent: null,
							front_transparent: null,
						},
						gold: {
							back_default: null,
							back_shiny: null,
							front_default: null,
							front_shiny: null,
							front_transparent: null,
						},
						silver: {
							back_default: null,
							back_shiny: null,
							front_default: null,
							front_shiny: null,
							front_transparent: null,
						},
					},
					"generation-iii": {
						emerald: {
							front_default: null,
							front_shiny: null,
						},
						"firered-leafgreen": {
							back_default: null,
							back_shiny: null,
							front_default: null,
							front_shiny: null,
						},
						"ruby-sapphire": {
							back_default: null,
							back_shiny: null,
							front_default: null,
							front_shiny: null,
						},
					},
					"generation-iv": {
						"diamond-pearl": {
							back_default: null,
							back_female: null,
							back_shiny: null,
							back_shiny_female: null,
							front_default: null,
							front_female: null,
							front_shiny: null,
							front_shiny_female: null,
						},
						"heartgold-soulsilver": {
							back_default: null,
							back_female: null,
							back_shiny: null,
							back_shiny_female: null,
							front_default: null,
							front_female: null,
							front_shiny: null,
							front_shiny_female: null,
						},
						platinum: {
							back_default: null,
							back_female: null,
							back_shiny: null,
							back_shiny_female: null,
							front_default: null,
							front_female: null,
							front_shiny: null,
							front_shiny_female: null,
						},
					},
					"generation-v": {
						"black-white": {
							animated: {
								back_default: null,
								back_female: null,
								back_shiny: null,
								back_shiny_female: null,
								front_default: null,
								front_female: null,
								front_shiny: null,
								front_shiny_female: null,
							},
							back_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/708.png",
							back_female: null,
							back_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/708.png",
							back_shiny_female: null,
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/708.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/708.png",
							front_shiny_female: null,
						},
					},
					"generation-vi": {
						"omegaruby-alphasapphire": {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/708.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/708.png",
							front_shiny_female: null,
						},
						"x-y": {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/708.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/708.png",
							front_shiny_female: null,
						},
					},
					"generation-vii": {
						icons: {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/708.png",
							front_female: null,
						},
						"ultra-sun-ultra-moon": {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/708.png",
							front_female: null,
							front_shiny:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/708.png",
							front_shiny_female: null,
						},
					},
					"generation-viii": {
						icons: {
							front_default:
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/708.png",
							front_female: null,
						},
					},
				},
			},
			stats: [
				{
					base_stat: 43,
					effort: 0,
					stat: {
						name: "hp",
						url: "https://pokeapi.co/api/v2/stat/1/",
					},
				},
				{
					base_stat: 70,
					effort: 1,
					stat: {
						name: "attack",
						url: "https://pokeapi.co/api/v2/stat/2/",
					},
				},
				{
					base_stat: 48,
					effort: 0,
					stat: {
						name: "defense",
						url: "https://pokeapi.co/api/v2/stat/3/",
					},
				},
				{
					base_stat: 50,
					effort: 0,
					stat: {
						name: "special-attack",
						url: "https://pokeapi.co/api/v2/stat/4/",
					},
				},
				{
					base_stat: 60,
					effort: 0,
					stat: {
						name: "special-defense",
						url: "https://pokeapi.co/api/v2/stat/5/",
					},
				},
				{
					base_stat: 38,
					effort: 0,
					stat: {
						name: "speed",
						url: "https://pokeapi.co/api/v2/stat/6/",
					},
				},
			],
			types: [
				{
					slot: 1,
					type: {
						name: "ghost",
						url: "https://pokeapi.co/api/v2/type/8/",
					},
				},
				{
					slot: 2,
					type: {
						name: "grass",
						url: "https://pokeapi.co/api/v2/type/12/",
					},
				},
			],
			weight: 70,
		});
	}),
];
