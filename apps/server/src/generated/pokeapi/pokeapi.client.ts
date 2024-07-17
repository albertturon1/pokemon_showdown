import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

type AbilityChange = {
  version_group: VersionGroupSummary;
  effect_entries: Array<AbilityChangeEffectText>;
};
type VersionGroupSummary = {
  name: string;
  url: string;
};
type AbilityChangeEffectText = {
  effect: string;
  language: LanguageSummary;
};
type LanguageSummary = {
  name: string;
  url: string;
};
type AbilityDetail = {
  id: number;
  name: string;
  is_main_series?: boolean | undefined;
  generation: GenerationSummary;
  names: Array<AbilityName>;
  effect_entries: Array<AbilityEffectText>;
  effect_changes: Array<AbilityChange>;
  flavor_text_entries: Array<AbilityFlavorText>;
  pokemon: Array<{
    is_hidden: boolean;
    slot: number;
    pokemon: {
      name: string;
      url: string;
    };
  }>;
};
type GenerationSummary = {
  name: string;
  url: string;
};
type AbilityName = {
  name: string;
  language: LanguageSummary;
};
type AbilityEffectText = {
  effect: string;
  short_effect: string;
  language: LanguageSummary;
};
type AbilityFlavorText = {
  flavor_text: string;
  language: LanguageSummary;
  version_group: VersionGroupSummary;
};
type BerryDetail = {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: BerryFirmnessSummary;
  flavors: Array<{
    potency: number;
    flavor: Partial<{
      name: string;
      url: string;
    }>;
  }>;
  item: ItemSummary;
  natural_gift_type: TypeSummary;
};
type BerryFirmnessSummary = {
  name: string;
  url: string;
};
type ItemSummary = {
  name: string;
  url: string;
};
type TypeSummary = {
  name: string;
  url: string;
};
type BerryFirmnessDetail = {
  id: number;
  name: string;
  berries: Array<BerrySummary>;
  names: Array<BerryFirmnessName>;
};
type BerrySummary = {
  name: string;
  url: string;
};
type BerryFirmnessName = {
  name: string;
  language: LanguageSummary;
};
type BerryFlavorDetail = {
  id: number;
  name: string;
  berries: Array<{
    potency: number;
    berry: Partial<{
      name: string;
      url: string;
    }>;
  }>;
  contest_type: ContestTypeSummary;
  names: Array<BerryFlavorName>;
};
type ContestTypeSummary = {
  name: string;
  url: string;
};
type BerryFlavorName = {
  name: string;
  language: LanguageSummary;
};
type CharacteristicDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type CharacteristicDetail = {
  id: number;
  gene_modulo: number;
  possible_values: Array<number>;
  highest_stat: StatSummary;
  descriptions: Array<CharacteristicDescription>;
};
type StatSummary = {
  name: string;
  url: string;
};
type ContestEffectDetail = {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: Array<ContestEffectEffectText>;
  flavor_text_entries: Array<ContestEffectFlavorText>;
};
type ContestEffectEffectText = {
  effect: string;
  language: LanguageSummary;
};
type ContestEffectFlavorText = {
  flavor_text: string;
  language: LanguageSummary;
};
type ContestTypeDetail = {
  id: number;
  name: string;
  berry_flavor: BerryFlavorSummary;
  names: Array<ContestTypeName>;
};
type BerryFlavorSummary = {
  name: string;
  url: string;
};
type ContestTypeName = {
  name: string;
  color: string;
  language: LanguageSummary;
};
type EggGroupDetail = {
  id: number;
  name: string;
  names: Array<EggGroupName>;
  pokemon_species: Array<{
    name?: string | undefined;
    url?: string | undefined;
  }>;
};
type EggGroupName = {
  name: string;
  language: LanguageSummary;
};
type EncounterConditionDetail = {
  id: number;
  name: string;
  values: Array<EncounterConditionValueSummary>;
  names: Array<EncounterConditionName>;
};
type EncounterConditionValueSummary = {
  name: string;
  url: string;
};
type EncounterConditionName = {
  name: string;
  language: LanguageSummary;
};
type EncounterConditionValueDetail = {
  id: number;
  name: string;
  condition: EncounterConditionSummary;
  names: Array<EncounterConditionValueName>;
};
type EncounterConditionSummary = {
  name: string;
  url: string;
};
type EncounterConditionValueName = {
  name: string;
  language: LanguageSummary;
};
type EncounterMethodDetail = {
  id: number;
  name: string;
  order?: (number | null) | undefined;
  names: Array<EncounterMethodName>;
};
type EncounterMethodName = {
  name: string;
  language: LanguageSummary;
};
type EvolutionChainDetail = {
  id: number;
  baby_trigger_item: ItemSummary;
  chain: {
    evolution_details: Array<unknown>;
    evolves_to: Array<{
      evolution_details: Array<{
        gender: {
          name: string;
          url: string;
        };
        held_item: {
          name: string;
          url: string;
        };
        item: {
          name: string;
          url: string;
        };
        known_move: unknown;
        known_move_type: unknown;
        location: {
          name: string;
          url: string;
        };
        min_affection: number | null;
        min_beauty: number | null;
        min_happiness: number | null;
        min_level: number | null;
        needs_overworld_rain: boolean | null;
        party_species: string | null;
        party_type: string | null;
        relative_physical_stats: string | null;
        time_of_day: string;
        trade_species: string | null;
        trigger: {
          name: string;
          url: string;
        };
        turn_upside_down: boolean;
      }>;
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
    }>;
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
};
type EvolutionTriggerDetail = {
  id: number;
  name: string;
  names: Array<EvolutionTriggerName>;
  pokemon_species: Array<{
    name: string;
    url: string;
  }>;
};
type EvolutionTriggerName = {
  name: string;
  language: LanguageSummary;
};
type GenerationDetail = {
  id: number;
  name: string;
  abilities: Array<AbilitySummary>;
  main_region: RegionSummary;
  moves: Array<MoveSummary>;
  names: Array<GenerationName>;
  pokemon_species: Array<PokemonSpeciesSummary>;
  types: Array<TypeSummary>;
  version_groups: Array<VersionGroupSummary>;
};
type AbilitySummary = {
  name: string;
  url: string;
};
type RegionSummary = {
  name: string;
  url: string;
};
type MoveSummary = {
  name: string;
  url: string;
};
type GenerationName = {
  name: string;
  language: LanguageSummary;
};
type PokemonSpeciesSummary = {
  name: string;
  url: string;
};
type GrowthRateDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type GrowthRateDetail = {
  id: number;
  name: string;
  formula: string;
  descriptions: Array<GrowthRateDescription>;
  levels: Array<Experience>;
  pokemon_species: Array<PokemonSpeciesSummary>;
};
type Experience = {
  level: number;
  experience: number;
};
type ItemAttributeDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type ItemAttributeDetail = {
  id: number;
  name: string;
  descriptions: Array<ItemAttributeDescription>;
  items: Array<{
    name: string;
    url: string;
  }>;
  names: Array<ItemAttributeName>;
};
type ItemAttributeName = {
  name: string;
  language: LanguageSummary;
};
type ItemCategoryDetail = {
  id: number;
  name: string;
  items: Array<ItemSummary>;
  names: Array<ItemCategoryName>;
  pocket: ItemPocketSummary;
};
type ItemCategoryName = {
  name: string;
  language: LanguageSummary;
};
type ItemPocketSummary = {
  name: string;
  url: string;
};
type ItemDetail = {
  id: number;
  name: string;
  cost?: (number | null) | undefined;
  fling_power?: (number | null) | undefined;
  fling_effect: ItemFlingEffectSummary;
  attributes: Array<{
    name: string;
    url: string;
  }>;
  category: ItemCategorySummary;
  effect_entries: Array<ItemEffectText>;
  flavor_text_entries: Array<ItemFlavorText>;
  game_indices: Array<ItemGameIndex>;
  names: Array<ItemName>;
  held_by_pokemon: Array<{
    pokemon: {
      name: string;
      url: string;
    };
    "version-details": Array<{
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
  sprites: {
    default: string;
  };
  baby_trigger_for: {
    url: string;
  };
  machines: Array<{
    machine: string;
    version_group: {
      name: string;
      url: string;
    };
  }>;
};
type ItemFlingEffectSummary = {
  name: string;
  url: string;
};
type ItemCategorySummary = {
  name: string;
  url: string;
};
type ItemEffectText = {
  effect: string;
  short_effect: string;
  language: LanguageSummary;
};
type ItemFlavorText = {
  text: string;
  version_group: VersionGroupSummary;
  language: LanguageSummary;
};
type ItemGameIndex = {
  game_index: number;
  generation: GenerationSummary;
};
type ItemName = {
  name: string;
  language: LanguageSummary;
};
type ItemFlingEffectDetail = {
  id: number;
  name: string;
  effect_entries: Array<ItemFlingEffectEffectText>;
  items: Array<ItemSummary>;
};
type ItemFlingEffectEffectText = {
  effect: string;
  language: LanguageSummary;
};
type ItemPocketDetail = {
  id: number;
  name: string;
  categories: Array<ItemCategorySummary>;
  names: Array<ItemPocketName>;
};
type ItemPocketName = {
  name: string;
  language: LanguageSummary;
};
type LanguageDetail = {
  id: number;
  name: string;
  official?: boolean | undefined;
  iso639: string;
  iso3166: string;
  names: Array<LanguageName>;
};
type LanguageName = {
  name: string;
  language: LanguageSummary;
};
type LocationAreaDetail = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: Array<{
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: Array<{
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
  location: LocationSummary;
  names: Array<LocationAreaName>;
  pokemon_encounters: Array<{
    pokemon: {
      name: string;
      url: string;
    };
    version_details: Array<{
      version: {
        name: string;
        url: string;
      };
      max_chance: number;
      encounter_details: {
        min_level: number;
        max_level: number;
        condition_values?:
        | {
          name: string;
          url: string;
        }
        | undefined;
        chance: number;
        method: {
          name: string;
          url: string;
        };
      };
    }>;
  }>;
};
type LocationSummary = {
  name: string;
  url: string;
};
type LocationAreaName = {
  name: string;
  language: LanguageSummary;
};
type LocationDetail = {
  id: number;
  name: string;
  region: RegionSummary;
  names: Array<LocationName>;
  game_indices: Array<LocationGameIndex>;
  areas: Array<LocationAreaSummary>;
};
type LocationName = {
  name: string;
  language: LanguageSummary;
};
type LocationGameIndex = {
  game_index: number;
  generation: GenerationSummary;
};
type LocationAreaSummary = {
  name: string;
  url: string;
};
type MachineDetail = {
  id: number;
  item: ItemSummary;
  version_group: VersionGroupSummary;
  move: MoveSummary;
};
type MoveBattleStyleDetail = {
  id: number;
  name: string;
  names: Array<MoveBattleStyleName>;
};
type MoveBattleStyleName = {
  name: string;
  language: LanguageSummary;
};
type MoveChange = {
  accuracy?: (number | null) | undefined;
  power?: (number | null) | undefined;
  pp?: (number | null) | undefined;
  effect_chance: number;
  effect_entries: Array<{
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }>;
  type: TypeSummary;
  version_group: VersionGroupSummary;
};
type MoveDamageClassDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type MoveDamageClassDetail = {
  id: number;
  name: string;
  descriptions: Array<MoveDamageClassDescription>;
  moves: Array<MoveSummary>;
  names: Array<MoveDamageClassName>;
};
type MoveDamageClassName = {
  name: string;
  language: LanguageSummary;
};
type MoveDetail = {
  id: number;
  name: string;
  accuracy?: (number | null) | undefined;
  effect_chance: number;
  pp?: (number | null) | undefined;
  priority?: (number | null) | undefined;
  power?: (number | null) | undefined;
  contest_combos: {
    normal: {
      use_before: Array<{
        name: string;
        url: string;
      }> | null;
      use_after: Array<{
        name: string;
        url: string;
      }> | null;
    };
    super: {
      use_before: Array<{
        name: string;
        url: string;
      }> | null;
      use_after: Array<{
        name: string;
        url: string;
      }> | null;
    };
  };
  contest_type: ContestTypeSummary;
  contest_effect: ContestEffectSummary;
  damage_class: MoveDamageClassSummary;
  effect_entries: Array<{
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }>;
  effect_changes: Array<{
    effect_entries: Array<{
      effect: string;
      language: {
        name: string;
        url: string;
      };
    }>;
    version_group: {
      name: string;
      url: string;
    };
  }>;
  generation: GenerationSummary;
  meta: MoveMeta;
  names: Array<MoveName>;
  past_values: Array<MoveChange>;
  stat_changes: Array<{
    change: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  super_contest_effect: SuperContestEffectSummary;
  target: MoveTargetSummary;
  type: TypeSummary;
  machines: Array<{
    machine: {
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }>;
  flavor_text_entries: Array<MoveFlavorText>;
  learned_by_pokemon: Array<{
    name: string;
    url: string;
  }>;
};
type ContestEffectSummary = {
  url: string;
};
type MoveDamageClassSummary = {
  name: string;
  url: string;
};
type MoveMeta = {
  ailment: MoveMetaAilmentSummary;
  category: MoveMetaCategorySummary;
  min_hits?: (number | null) | undefined;
  max_hits?: (number | null) | undefined;
  min_turns?: (number | null) | undefined;
  max_turns?: (number | null) | undefined;
  drain?: (number | null) | undefined;
  healing?: (number | null) | undefined;
  crit_rate?: (number | null) | undefined;
  ailment_chance?: (number | null) | undefined;
  flinch_chance?: (number | null) | undefined;
  stat_chance?: (number | null) | undefined;
};
type MoveMetaAilmentSummary = {
  name: string;
  url: string;
};
type MoveMetaCategorySummary = {
  name: string;
  url: string;
};
type MoveName = {
  name: string;
  language: LanguageSummary;
};
type SuperContestEffectSummary = {
  url: string;
};
type MoveTargetSummary = {
  name: string;
  url: string;
};
type MoveFlavorText = {
  flavor_text: string;
  language: LanguageSummary;
  version_group: VersionGroupSummary;
};
type MoveLearnMethodDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type MoveLearnMethodDetail = {
  id: number;
  name: string;
  names: Array<MoveLearnMethodName>;
  descriptions: Array<MoveLearnMethodDescription>;
  version_groups: Array<{
    name: string;
    url: string;
  }>;
};
type MoveLearnMethodName = {
  name: string;
  language: LanguageSummary;
};
type MoveMetaAilmentDetail = {
  id: number;
  name: string;
  moves: Array<{
    name: string;
    url: string;
  }>;
  names: Array<MoveMetaAilmentName>;
};
type MoveMetaAilmentName = {
  name: string;
  language: LanguageSummary;
};
type MoveMetaCategoryDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type MoveMetaCategoryDetail = {
  id: number;
  name: string;
  descriptions: Array<MoveMetaCategoryDescription>;
  moves: Array<{
    name: string;
    url: string;
  }>;
};
type MoveTargetDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type MoveTargetDetail = {
  id: number;
  name: string;
  descriptions: Array<MoveTargetDescription>;
  moves: Array<MoveSummary>;
  names: Array<MoveTargetName>;
};
type MoveTargetName = {
  name: string;
  language: LanguageSummary;
};
type NatureBattleStylePreference = {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: MoveBattleStyleSummary;
};
type MoveBattleStyleSummary = {
  name: string;
  url: string;
};
type NatureDetail = {
  id: number;
  name: string;
  decreased_stat: StatSummary;
  increased_stat: StatSummary;
  likes_flavor: BerryFlavorSummary;
  hates_flavor: BerryFlavorSummary;
  berries: Array<BerrySummary>;
  pokeathlon_stat_changes: Array<{
    max_change: number;
    pokeathlon_stat: {
      name: string;
      url: string;
    };
  }>;
  move_battle_style_preferences: Array<NatureBattleStylePreference>;
  names: Array<NatureName>;
};
type NatureName = {
  name: string;
  language: LanguageSummary;
};
type PaginatedAbilitySummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<AbilitySummary>;
}>;
type PaginatedBerryFirmnessSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<BerryFirmnessSummary>;
}>;
type PaginatedBerryFlavorSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<BerryFlavorSummary>;
}>;
type PaginatedBerrySummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<BerrySummary>;
}>;
type PaginatedCharacteristicSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<CharacteristicSummary>;
}>;
type CharacteristicSummary = {
  url: string;
};
type PaginatedContestEffectSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ContestEffectSummary>;
}>;
type PaginatedContestTypeSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ContestTypeSummary>;
}>;
type PaginatedEggGroupSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<EggGroupSummary>;
}>;
type EggGroupSummary = {
  name: string;
  url: string;
};
type PaginatedEncounterConditionSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<EncounterConditionSummary>;
}>;
type PaginatedEncounterConditionValueSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<EncounterConditionValueSummary>;
}>;
type PaginatedEncounterMethodSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<EncounterMethodSummary>;
}>;
type EncounterMethodSummary = {
  name: string;
  url: string;
};
type PaginatedEvolutionChainSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<EvolutionChainSummary>;
}>;
type EvolutionChainSummary = {
  url: string;
};
type PaginatedEvolutionTriggerSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<EvolutionTriggerSummary>;
}>;
type EvolutionTriggerSummary = {
  name: string;
  url: string;
};
type PaginatedGenderSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<GenderSummary>;
}>;
type GenderSummary = {
  name: string;
  url: string;
};
type PaginatedGenerationSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<GenerationSummary>;
}>;
type PaginatedGrowthRateSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<GrowthRateSummary>;
}>;
type GrowthRateSummary = {
  name: string;
  url: string;
};
type PaginatedItemAttributeSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ItemAttributeSummary>;
}>;
type ItemAttributeSummary = {
  name: string;
  url: string;
};
type PaginatedItemCategorySummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ItemCategorySummary>;
}>;
type PaginatedItemFlingEffectSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ItemFlingEffectSummary>;
}>;
type PaginatedItemPocketSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ItemPocketSummary>;
}>;
type PaginatedItemSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ItemSummary>;
}>;
type PaginatedLanguageSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<LanguageSummary>;
}>;
type PaginatedLocationAreaSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<LocationAreaSummary>;
}>;
type PaginatedLocationSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<LocationSummary>;
}>;
type PaginatedMachineSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MachineSummary>;
}>;
type MachineSummary = {
  url: string;
};
type PaginatedMoveBattleStyleSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveBattleStyleSummary>;
}>;
type PaginatedMoveDamageClassSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveDamageClassSummary>;
}>;
type PaginatedMoveLearnMethodSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveLearnMethodSummary>;
}>;
type MoveLearnMethodSummary = {
  name: string;
  url: string;
};
type PaginatedMoveMetaAilmentSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveMetaAilmentSummary>;
}>;
type PaginatedMoveMetaCategorySummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveMetaCategorySummary>;
}>;
type PaginatedMoveSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveSummary>;
}>;
type PaginatedMoveTargetSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MoveTargetSummary>;
}>;
type PaginatedNatureSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NatureSummary>;
}>;
type NatureSummary = {
  name: string;
  url: string;
};
type PaginatedPalParkAreaSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PalParkAreaSummary>;
}>;
type PalParkAreaSummary = {
  name: string;
  url: string;
};
type PaginatedPokeathlonStatSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokeathlonStatSummary>;
}>;
type PokeathlonStatSummary = {
  name: string;
  url: string;
};
type PaginatedPokedexSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokedexSummary>;
}>;
type PokedexSummary = {
  name: string;
  url: string;
};
type PaginatedPokemonColorSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonColorSummary>;
}>;
type PokemonColorSummary = {
  name: string;
  url: string;
};
type PaginatedPokemonFormSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonFormSummary>;
}>;
type PokemonFormSummary = {
  name: string;
  url: string;
};
type PaginatedPokemonHabitatSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonHabitatSummary>;
}>;
type PokemonHabitatSummary = {
  name: string;
  url: string;
};
type PaginatedPokemonShapeSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonShapeSummary>;
}>;
type PokemonShapeSummary = {
  name: string;
  url: string;
};
type PaginatedPokemonSpeciesSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonSpeciesSummary>;
}>;
type PaginatedPokemonSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonSummary>;
}>;
type PokemonSummary = {
  name: string;
  url: string;
};
type PaginatedRegionSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<RegionSummary>;
}>;
type PaginatedStatSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<StatSummary>;
}>;
type PaginatedSuperContestEffectSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<SuperContestEffectSummary>;
}>;
type PaginatedTypeSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<TypeSummary>;
}>;
type PaginatedVersionGroupSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<VersionGroupSummary>;
}>;
type PaginatedVersionSummaryList = Partial<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<VersionSummary>;
}>;
type VersionSummary = {
  name: string;
  url: string;
};
type PalParkAreaDetail = {
  id: number;
  name: string;
  names: Array<PalParkAreaName>;
  pokemon_encounters: Array<{
    base_score: number;
    "pokemon-species": {
      name: string;
      url: string;
    };
    rate: number;
  }>;
};
type PalParkAreaName = {
  name: string;
  language: LanguageSummary;
};
type PokeathlonStatDetail = {
  id: number;
  name: string;
  affecting_natures: {
    decrease: Array<{
      max_change: number;
      nature: {
        name: string;
        url: string;
      };
    }>;
    increase: Array<{
      max_change: number;
      nature: {
        name: string;
        url: string;
      };
    }>;
  };
  names: Array<PokeathlonStatName>;
};
type PokeathlonStatName = {
  name: string;
  language: LanguageSummary;
};
type PokedexDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type PokedexDetail = {
  id: number;
  name: string;
  is_main_series?: boolean | undefined;
  descriptions: Array<PokedexDescription>;
  names: Array<PokedexName>;
  pokemon_entries: Array<{
    entry_number: number;
    pokemon_species: {
      name: string;
      url: string;
    };
  }>;
  region: RegionSummary;
  version_groups: Array<{
    name: string;
    url: string;
  }>;
};
type PokedexName = {
  name: string;
  language: LanguageSummary;
};
type PokemonColorDetail = {
  id: number;
  name: string;
  names: Array<PokemonColorName>;
  pokemon_species: Array<PokemonSpeciesSummary>;
};
type PokemonColorName = {
  name: string;
  language: LanguageSummary;
};
type PokemonDetail = Partial<{
  id: number;
  name: string;
  base_experience: number | null;
  height: number | null;
  is_default: boolean;
  order: number | null;
  weight: number | null;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  past_abilities: Array<{
    abilities: Array<{
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }>;
    generation: {
      name: string;
      url: string;
    };
  }>;
  forms: Array<PokemonFormSummary>;
  game_indices: Array<PokemonGameIndex>;
  held_items: Array<HeldItem>;
  location_area_encounters: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }>;
  }>;
  species: PokemonSpeciesSummary;
  sprites: Partial<
    {
      front_default: string;
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    } & {
      [key: string]: any;
    }
  >;
}>;
type PokemonGameIndex = {
  game_index: number;
  version: VersionSummary;
};
type HeldItem = {
  item: {
    name: string;
    url: string;
  };
  version_details: Array<{
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }>;
};
type PokemonDexEntry = {
  entry_number: number;
  pokedex: PokedexSummary;
};
type PokemonFormDetail = {
  id: number;
  name: string;
  order?: (number | null) | undefined;
  form_order?: (number | null) | undefined;
  is_default?: boolean | undefined;
  is_battle_only?: boolean | undefined;
  is_mega?: boolean | undefined;
  form_name: string;
  pokemon: PokemonSummary;
  sprites: Partial<
    {
      default: string;
    } & {
      [key: string]: string | null;
    }
  >;
  version_group: VersionGroupSummary;
  form_names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
};
type PokemonHabitatDetail = {
  id: number;
  name: string;
  names: Array<PokemonHabitatName>;
  pokemon_species: Array<PokemonSpeciesSummary>;
};
type PokemonHabitatName = {
  name: string;
  language: LanguageSummary;
};
type PokemonShapeDetail = {
  id: number;
  name: string;
  awesome_names: Array<{
    awesome_name: string;
    language: {
      name: string;
      url: string;
    };
  }>;
  names: Array<{
    url: string;
    name: string;
  }>;
  pokemon_species: Array<PokemonSpeciesSummary>;
};
type PokemonSpeciesDescription = {
  description?: string | undefined;
  language: LanguageSummary;
};
type PokemonSpeciesDetail = {
  id: number;
  name: string;
  order?: (number | null) | undefined;
  gender_rate?: (number | null) | undefined;
  capture_rate?: (number | null) | undefined;
  base_happiness?: (number | null) | undefined;
  is_baby?: boolean | undefined;
  is_legendary?: boolean | undefined;
  is_mythical?: boolean | undefined;
  hatch_counter?: (number | null) | undefined;
  has_gender_differences?: boolean | undefined;
  forms_switchable?: boolean | undefined;
  growth_rate: GrowthRateSummary;
  pokedex_numbers: Array<PokemonDexEntry>;
  egg_groups: Array<{
    name: string;
    url: string;
  }>;
  color: PokemonColorSummary;
  shape: PokemonShapeSummary;
  evolves_from_species: PokemonSpeciesSummary;
  evolution_chain: EvolutionChainSummary;
  habitat: PokemonHabitatSummary;
  generation: GenerationSummary;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  pal_park_encounters: Array<{
    area: {
      name: string;
      url: string;
    };
    base_score: number;
    rate: number;
  }>;
  form_descriptions: Array<PokemonSpeciesDescription>;
  flavor_text_entries: Array<PokemonSpeciesFlavorText>;
  genera: Array<{
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }>;
  varieties: Array<{
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }>;
};
type PokemonSpeciesFlavorText = {
  flavor_text: string;
  language: LanguageSummary;
  version: VersionSummary;
};
type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: StatSummary;
};
type RegionDetail = {
  id: number;
  name: string;
  locations: Array<LocationSummary>;
  main_generation: GenerationSummary;
  names: Array<RegionName>;
  pokedexes: Array<PokedexSummary>;
  version_groups: Array<{
    name: string;
    url: string;
  }>;
};
type RegionName = {
  name: string;
  language: LanguageSummary;
};
type StatDetail = {
  id: number;
  name: string;
  game_index: number;
  is_battle_only?: boolean | undefined;
  affecting_moves: {
    increase: Array<{
      change: number;
      move: {
        name: string;
        url: string;
      };
    }>;
    decrease: Array<{
      change: number;
      move: {
        name: string;
        url: string;
      };
    }>;
  };
  affecting_natures: {
    increase: Array<{
      name: string;
      url: string;
    }>;
    decrease: Array<{
      name: string;
      url: string;
    }>;
  };
  characteristics: Array<CharacteristicSummary>;
  move_damage_class: MoveDamageClassSummary;
  names: Array<StatName>;
};
type StatName = {
  name: string;
  language: LanguageSummary;
};
type SuperContestEffectDetail = {
  id: number;
  appeal: number;
  flavor_text_entries: Array<SuperContestEffectFlavorText>;
  moves: Array<MoveSummary>;
};
type SuperContestEffectFlavorText = {
  flavor_text: string;
  language: LanguageSummary;
};
type TypeDetail = {
  id: number;
  name: string;
  damage_relations: {
    no_damage_to: Array<{
      name: string;
      url: string;
    }>;
    half_damage_to: Array<{
      name: string;
      url: string;
    }>;
    double_damage_to: Array<{
      name: string;
      url: string;
    }>;
    no_damage_from: Array<{
      name: string;
      url: string;
    }>;
    half_damage_from: Array<{
      name: string;
      url: string;
    }>;
    double_damage_from: Array<{
      name: string;
      url: string;
    }>;
  };
  past_damage_relations: Array<{
    generation: {
      name: string;
      url: string;
    };
    damage_relations: {
      no_damage_to: Array<{
        name: string;
        url: string;
      }>;
      half_damage_to: Array<{
        name: string;
        url: string;
      }>;
      double_damage_to: Array<{
        name: string;
        url: string;
      }>;
      no_damage_from: Array<{
        name: string;
        url: string;
      }>;
      half_damage_from: Array<{
        name: string;
        url: string;
      }>;
      double_damage_from: Array<{
        name: string;
        url: string;
      }>;
    };
  }>;
  game_indices: Array<TypeGameIndex>;
  generation: GenerationSummary;
  move_damage_class: MoveDamageClassSummary;
  names: Array<AbilityName>;
  pokemon: Array<{
    slot?: number | undefined;
    pokemon?:
    | Partial<{
      name: string;
      url: string;
    }>
    | undefined;
  }>;
  moves: Array<MoveSummary>;
};
type TypeGameIndex = {
  game_index: number;
  generation: GenerationSummary;
};
type VersionDetail = {
  id: number;
  name: string;
  names: Array<VersionName>;
  version_group: VersionGroupSummary;
};
type VersionName = {
  name: string;
  language: LanguageSummary;
};
type VersionGroupDetail = {
  id: number;
  name: string;
  order?: (number | null) | undefined;
  generation: GenerationSummary;
  move_learn_methods: Array<{
    name: string;
    url: string;
  }>;
  pokedexes: Array<{
    name: string;
    url: string;
  }>;
  regions: Array<{
    name: string;
    url: string;
  }>;
  versions: Array<VersionSummary>;
};

const AbilitySummary: z.ZodType<AbilitySummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedAbilitySummaryList: z.ZodType<PaginatedAbilitySummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(AbilitySummary),
  })
  .partial()
  .passthrough();
const GenerationSummary: z.ZodType<GenerationSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const LanguageSummary: z.ZodType<LanguageSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const AbilityName: z.ZodType<AbilityName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const AbilityEffectText: z.ZodType<AbilityEffectText> = z
  .object({
    effect: z.string().max(6000),
    short_effect: z.string().max(300),
    language: LanguageSummary,
  })
  .passthrough();
const VersionGroupSummary: z.ZodType<VersionGroupSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const AbilityChangeEffectText: z.ZodType<AbilityChangeEffectText> = z
  .object({ effect: z.string().max(6000), language: LanguageSummary })
  .passthrough();
const AbilityChange: z.ZodType<AbilityChange> = z
  .object({
    version_group: VersionGroupSummary,
    effect_entries: z.array(AbilityChangeEffectText),
  })
  .passthrough();
const AbilityFlavorText: z.ZodType<AbilityFlavorText> = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummary,
    version_group: VersionGroupSummary,
  })
  .passthrough();
const AbilityDetail: z.ZodType<AbilityDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    is_main_series: z.boolean().optional(),
    generation: GenerationSummary,
    names: z.array(AbilityName),
    effect_entries: z.array(AbilityEffectText),
    effect_changes: z.array(AbilityChange),
    flavor_text_entries: z.array(AbilityFlavorText),
    pokemon: z.array(
      z
        .object({
          is_hidden: z.boolean(),
          slot: z.number().int(),
          pokemon: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const BerrySummary: z.ZodType<BerrySummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedBerrySummaryList: z.ZodType<PaginatedBerrySummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(BerrySummary),
  })
  .partial()
  .passthrough();
const BerryFirmnessSummary: z.ZodType<BerryFirmnessSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const ItemSummary: z.ZodType<ItemSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const TypeSummary: z.ZodType<TypeSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const BerryDetail: z.ZodType<BerryDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    growth_time: z.number().int(),
    max_harvest: z.number().int(),
    natural_gift_power: z.number().int(),
    size: z.number().int(),
    smoothness: z.number().int(),
    soil_dryness: z.number().int(),
    firmness: BerryFirmnessSummary,
    flavors: z.array(
      z
        .object({
          potency: z.number().int(),
          flavor: z
            .object({ name: z.string(), url: z.string().url() })
            .partial()
            .passthrough(),
        })
        .passthrough()
    ),
    item: ItemSummary,
    natural_gift_type: TypeSummary,
  })
  .passthrough();
const PaginatedBerryFirmnessSummaryList: z.ZodType<PaginatedBerryFirmnessSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(BerryFirmnessSummary),
    })
    .partial()
    .passthrough();
const BerryFirmnessName: z.ZodType<BerryFirmnessName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const BerryFirmnessDetail: z.ZodType<BerryFirmnessDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    berries: z.array(BerrySummary),
    names: z.array(BerryFirmnessName),
  })
  .passthrough();
const BerryFlavorSummary: z.ZodType<BerryFlavorSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedBerryFlavorSummaryList: z.ZodType<PaginatedBerryFlavorSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(BerryFlavorSummary),
    })
    .partial()
    .passthrough();
const ContestTypeSummary: z.ZodType<ContestTypeSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const BerryFlavorName: z.ZodType<BerryFlavorName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const BerryFlavorDetail: z.ZodType<BerryFlavorDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    berries: z.array(
      z
        .object({
          potency: z.number().int(),
          berry: z
            .object({ name: z.string(), url: z.string().url() })
            .partial()
            .passthrough(),
        })
        .passthrough()
    ),
    contest_type: ContestTypeSummary,
    names: z.array(BerryFlavorName),
  })
  .passthrough();
const CharacteristicSummary: z.ZodType<CharacteristicSummary> = z
  .object({ url: z.string().url() })
  .passthrough();
const PaginatedCharacteristicSummaryList: z.ZodType<PaginatedCharacteristicSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(CharacteristicSummary),
    })
    .partial()
    .passthrough();
const StatSummary: z.ZodType<StatSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const CharacteristicDescription: z.ZodType<CharacteristicDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const CharacteristicDetail: z.ZodType<CharacteristicDetail> = z
  .object({
    id: z.number().int(),
    gene_modulo: z.number().int(),
    possible_values: z.array(z.number()),
    highest_stat: StatSummary,
    descriptions: z.array(CharacteristicDescription),
  })
  .passthrough();
const PaginatedContestTypeSummaryList: z.ZodType<PaginatedContestTypeSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(ContestTypeSummary),
    })
    .partial()
    .passthrough();
const ContestTypeName: z.ZodType<ContestTypeName> = z
  .object({
    name: z.string().max(100),
    color: z.string().max(10),
    language: LanguageSummary,
  })
  .passthrough();
const ContestTypeDetail: z.ZodType<ContestTypeDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    berry_flavor: BerryFlavorSummary,
    names: z.array(ContestTypeName),
  })
  .passthrough();
const ContestEffectSummary: z.ZodType<ContestEffectSummary> = z
  .object({ url: z.string().url() })
  .passthrough();
const PaginatedContestEffectSummaryList: z.ZodType<PaginatedContestEffectSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(ContestEffectSummary),
    })
    .partial()
    .passthrough();
const ContestEffectEffectText: z.ZodType<ContestEffectEffectText> = z
  .object({ effect: z.string().max(6000), language: LanguageSummary })
  .passthrough();
const ContestEffectFlavorText: z.ZodType<ContestEffectFlavorText> = z
  .object({ flavor_text: z.string().max(500), language: LanguageSummary })
  .passthrough();
const ContestEffectDetail: z.ZodType<ContestEffectDetail> = z
  .object({
    id: z.number().int(),
    appeal: z.number().int(),
    jam: z.number().int(),
    effect_entries: z.array(ContestEffectEffectText),
    flavor_text_entries: z.array(ContestEffectFlavorText),
  })
  .passthrough();
const EggGroupSummary: z.ZodType<EggGroupSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedEggGroupSummaryList: z.ZodType<PaginatedEggGroupSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(EggGroupSummary),
  })
  .partial()
  .passthrough();
const EggGroupName: z.ZodType<EggGroupName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const EggGroupDetail: z.ZodType<EggGroupDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(EggGroupName),
    pokemon_species: z.array(
      z
        .object({
          name: z.string().optional(),
          url: z.string().url().optional(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const EncounterMethodSummary: z.ZodType<EncounterMethodSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedEncounterMethodSummaryList: z.ZodType<PaginatedEncounterMethodSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(EncounterMethodSummary),
    })
    .partial()
    .passthrough();
const EncounterMethodName: z.ZodType<EncounterMethodName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const EncounterMethodDetail: z.ZodType<EncounterMethodDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    order: z.union([z.number(), z.null()]).optional(),
    names: z.array(EncounterMethodName),
  })
  .passthrough();
const EncounterConditionSummary: z.ZodType<EncounterConditionSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedEncounterConditionSummaryList: z.ZodType<PaginatedEncounterConditionSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(EncounterConditionSummary),
    })
    .partial()
    .passthrough();
const EncounterConditionValueSummary: z.ZodType<EncounterConditionValueSummary> =
  z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const EncounterConditionName: z.ZodType<EncounterConditionName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const EncounterConditionDetail: z.ZodType<EncounterConditionDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    values: z.array(EncounterConditionValueSummary),
    names: z.array(EncounterConditionName),
  })
  .passthrough();
const PaginatedEncounterConditionValueSummaryList: z.ZodType<PaginatedEncounterConditionValueSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(EncounterConditionValueSummary),
    })
    .partial()
    .passthrough();
const EncounterConditionValueName: z.ZodType<EncounterConditionValueName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const EncounterConditionValueDetail: z.ZodType<EncounterConditionValueDetail> =
  z
    .object({
      id: z.number().int(),
      name: z.string().max(100),
      condition: EncounterConditionSummary,
      names: z.array(EncounterConditionValueName),
    })
    .passthrough();
const EvolutionChainSummary: z.ZodType<EvolutionChainSummary> = z
  .object({ url: z.string().url() })
  .passthrough();
const PaginatedEvolutionChainSummaryList: z.ZodType<PaginatedEvolutionChainSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(EvolutionChainSummary),
    })
    .partial()
    .passthrough();
const EvolutionChainDetail: z.ZodType<EvolutionChainDetail> = z
  .object({
    id: z.number().int(),
    baby_trigger_item: ItemSummary,
    chain: z
      .object({
        evolution_details: z.array(z.unknown()),
        evolves_to: z.array(
          z
            .object({
              evolution_details: z.array(
                z
                  .object({
                    gender: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough()
                      .nullable(),
                    held_item: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough()
                      .nullable(),
                    item: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough()
                      .nullable(),
                    known_move: z.unknown().nullable(),
                    known_move_type: z.unknown().nullable(),
                    location: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough()
                      .nullable(),
                    min_affection: z.number().int().nullable(),
                    min_beauty: z.number().int().nullable(),
                    min_happiness: z.number().int().nullable(),
                    min_level: z.number().int().nullable(),
                    needs_overworld_rain: z.boolean().nullable(),
                    party_species: z.string().nullable(),
                    party_type: z.string().nullable(),
                    relative_physical_stats: z.string().nullable(),
                    time_of_day: z.string(),
                    trade_species: z.string().nullable(),
                    trigger: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough(),
                    turn_upside_down: z.boolean(),
                  })
                  .passthrough()
              ),
              is_baby: z.boolean(),
              species: z
                .object({ name: z.string(), url: z.string().url() })
                .passthrough(),
            })
            .passthrough()
        ),
        is_baby: z.boolean(),
        species: z
          .object({ name: z.string(), url: z.string().url() })
          .passthrough(),
      })
      .passthrough(),
  })
  .passthrough();
const EvolutionTriggerSummary: z.ZodType<EvolutionTriggerSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedEvolutionTriggerSummaryList: z.ZodType<PaginatedEvolutionTriggerSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(EvolutionTriggerSummary),
    })
    .partial()
    .passthrough();
const EvolutionTriggerName: z.ZodType<EvolutionTriggerName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const EvolutionTriggerDetail: z.ZodType<EvolutionTriggerDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(EvolutionTriggerName),
    pokemon_species: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const PaginatedGenerationSummaryList: z.ZodType<PaginatedGenerationSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(GenerationSummary),
    })
    .partial()
    .passthrough();
const RegionSummary: z.ZodType<RegionSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const MoveSummary: z.ZodType<MoveSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const GenerationName: z.ZodType<GenerationName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const PokemonSpeciesSummary: z.ZodType<PokemonSpeciesSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const GenerationDetail: z.ZodType<GenerationDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    abilities: z.array(AbilitySummary),
    main_region: RegionSummary,
    moves: z.array(MoveSummary),
    names: z.array(GenerationName),
    pokemon_species: z.array(PokemonSpeciesSummary),
    types: z.array(TypeSummary),
    version_groups: z.array(VersionGroupSummary),
  })
  .passthrough();
const GenderSummary: z.ZodType<GenderSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedGenderSummaryList: z.ZodType<PaginatedGenderSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(GenderSummary),
  })
  .partial()
  .passthrough();
const GenderDetail = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    pokemon_species_details: z.array(
      z
        .object({
          rate: z.number().int(),
          pokemon_species: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    required_for_evolution: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const GrowthRateSummary: z.ZodType<GrowthRateSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedGrowthRateSummaryList: z.ZodType<PaginatedGrowthRateSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(GrowthRateSummary),
    })
    .partial()
    .passthrough();
const GrowthRateDescription: z.ZodType<GrowthRateDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const Experience: z.ZodType<Experience> = z
  .object({ level: z.number().int(), experience: z.number().int() })
  .passthrough();
const GrowthRateDetail: z.ZodType<GrowthRateDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    formula: z.string().max(500),
    descriptions: z.array(GrowthRateDescription),
    levels: z.array(Experience),
    pokemon_species: z.array(PokemonSpeciesSummary),
  })
  .passthrough();
const PaginatedItemSummaryList: z.ZodType<PaginatedItemSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(ItemSummary),
  })
  .partial()
  .passthrough();
const ItemFlingEffectSummary: z.ZodType<ItemFlingEffectSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const ItemCategorySummary: z.ZodType<ItemCategorySummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const ItemEffectText: z.ZodType<ItemEffectText> = z
  .object({
    effect: z.string().max(6000),
    short_effect: z.string().max(300),
    language: LanguageSummary,
  })
  .passthrough();
const ItemFlavorText: z.ZodType<ItemFlavorText> = z
  .object({
    text: z.string(),
    version_group: VersionGroupSummary,
    language: LanguageSummary,
  })
  .passthrough();
const ItemGameIndex: z.ZodType<ItemGameIndex> = z
  .object({ game_index: z.number().int(), generation: GenerationSummary })
  .passthrough();
const ItemName: z.ZodType<ItemName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const ItemDetail: z.ZodType<ItemDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    cost: z.union([z.number(), z.null()]).optional(),
    fling_power: z.union([z.number(), z.null()]).optional(),
    fling_effect: ItemFlingEffectSummary,
    attributes: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    category: ItemCategorySummary,
    effect_entries: z.array(ItemEffectText),
    flavor_text_entries: z.array(ItemFlavorText),
    game_indices: z.array(ItemGameIndex),
    names: z.array(ItemName),
    held_by_pokemon: z.array(
      z
        .object({
          pokemon: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          "version-details": z.array(
            z
              .object({
                rarity: z.number().int(),
                version: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
              })
              .passthrough()
          ),
        })
        .passthrough()
    ),
    sprites: z.object({ default: z.string().url() }).passthrough(),
    baby_trigger_for: z.object({ url: z.string().url() }).passthrough(),
    machines: z.array(
      z
        .object({
          machine: z.string().url(),
          version_group: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PaginatedItemCategorySummaryList: z.ZodType<PaginatedItemCategorySummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(ItemCategorySummary),
    })
    .partial()
    .passthrough();
const ItemCategoryName: z.ZodType<ItemCategoryName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const ItemPocketSummary: z.ZodType<ItemPocketSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const ItemCategoryDetail: z.ZodType<ItemCategoryDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    items: z.array(ItemSummary),
    names: z.array(ItemCategoryName),
    pocket: ItemPocketSummary,
  })
  .passthrough();
const ItemAttributeSummary: z.ZodType<ItemAttributeSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedItemAttributeSummaryList: z.ZodType<PaginatedItemAttributeSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(ItemAttributeSummary),
    })
    .partial()
    .passthrough();
const ItemAttributeDescription: z.ZodType<ItemAttributeDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const ItemAttributeName: z.ZodType<ItemAttributeName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const ItemAttributeDetail: z.ZodType<ItemAttributeDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    descriptions: z.array(ItemAttributeDescription),
    items: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    names: z.array(ItemAttributeName),
  })
  .passthrough();
const PaginatedItemFlingEffectSummaryList: z.ZodType<PaginatedItemFlingEffectSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(ItemFlingEffectSummary),
    })
    .partial()
    .passthrough();
const ItemFlingEffectEffectText: z.ZodType<ItemFlingEffectEffectText> = z
  .object({ effect: z.string().max(6000), language: LanguageSummary })
  .passthrough();
const ItemFlingEffectDetail: z.ZodType<ItemFlingEffectDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    effect_entries: z.array(ItemFlingEffectEffectText),
    items: z.array(ItemSummary),
  })
  .passthrough();
const PaginatedItemPocketSummaryList: z.ZodType<PaginatedItemPocketSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(ItemPocketSummary),
    })
    .partial()
    .passthrough();
const ItemPocketName: z.ZodType<ItemPocketName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const ItemPocketDetail: z.ZodType<ItemPocketDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    categories: z.array(ItemCategorySummary),
    names: z.array(ItemPocketName),
  })
  .passthrough();
const PaginatedLanguageSummaryList: z.ZodType<PaginatedLanguageSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(LanguageSummary),
  })
  .partial()
  .passthrough();
const LanguageName: z.ZodType<LanguageName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const LanguageDetail: z.ZodType<LanguageDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    official: z.boolean().optional(),
    iso639: z.string().max(10),
    iso3166: z.string().max(2),
    names: z.array(LanguageName),
  })
  .passthrough();
const LocationSummary: z.ZodType<LocationSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedLocationSummaryList: z.ZodType<PaginatedLocationSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(LocationSummary),
  })
  .partial()
  .passthrough();
const LocationName: z.ZodType<LocationName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const LocationGameIndex: z.ZodType<LocationGameIndex> = z
  .object({ game_index: z.number().int(), generation: GenerationSummary })
  .passthrough();
const LocationAreaSummary: z.ZodType<LocationAreaSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const LocationDetail: z.ZodType<LocationDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    region: RegionSummary,
    names: z.array(LocationName),
    game_indices: z.array(LocationGameIndex),
    areas: z.array(LocationAreaSummary),
  })
  .passthrough();
const PaginatedLocationAreaSummaryList: z.ZodType<PaginatedLocationAreaSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(LocationAreaSummary),
    })
    .partial()
    .passthrough();
const LocationAreaName: z.ZodType<LocationAreaName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const LocationAreaDetail: z.ZodType<LocationAreaDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    game_index: z.number().int(),
    encounter_method_rates: z.array(
      z
        .object({
          encounter_method: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          version_details: z.array(
            z
              .object({
                rate: z.number().int(),
                version: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
              })
              .passthrough()
          ),
        })
        .passthrough()
    ),
    location: LocationSummary,
    names: z.array(LocationAreaName),
    pokemon_encounters: z.array(
      z
        .object({
          pokemon: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          version_details: z.array(
            z
              .object({
                version: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
                max_chance: z.number().int(),
                encounter_details: z
                  .object({
                    min_level: z.number().int(),
                    max_level: z.number().int(),
                    condition_values: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough()
                      .optional(),
                    chance: z.number().int(),
                    method: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough(),
                  })
                  .passthrough(),
              })
              .passthrough()
          ),
        })
        .passthrough()
    ),
  })
  .passthrough();
const MachineSummary: z.ZodType<MachineSummary> = z
  .object({ url: z.string().url() })
  .passthrough();
const PaginatedMachineSummaryList: z.ZodType<PaginatedMachineSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(MachineSummary),
  })
  .partial()
  .passthrough();
const MachineDetail: z.ZodType<MachineDetail> = z
  .object({
    id: z.number().int(),
    item: ItemSummary,
    version_group: VersionGroupSummary,
    move: MoveSummary,
  })
  .passthrough();
const PaginatedMoveSummaryList: z.ZodType<PaginatedMoveSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(MoveSummary),
  })
  .partial()
  .passthrough();
const MoveDamageClassSummary: z.ZodType<MoveDamageClassSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const MoveMetaAilmentSummary: z.ZodType<MoveMetaAilmentSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const MoveMetaCategorySummary: z.ZodType<MoveMetaCategorySummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const MoveMeta: z.ZodType<MoveMeta> = z
  .object({
    ailment: MoveMetaAilmentSummary,
    category: MoveMetaCategorySummary,
    min_hits: z.union([z.number(), z.null()]).optional(),
    max_hits: z.union([z.number(), z.null()]).optional(),
    min_turns: z.union([z.number(), z.null()]).optional(),
    max_turns: z.union([z.number(), z.null()]).optional(),
    drain: z.union([z.number(), z.null()]).optional(),
    healing: z.union([z.number(), z.null()]).optional(),
    crit_rate: z.union([z.number(), z.null()]).optional(),
    ailment_chance: z.union([z.number(), z.null()]).optional(),
    flinch_chance: z.union([z.number(), z.null()]).optional(),
    stat_chance: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const MoveName: z.ZodType<MoveName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const MoveChange: z.ZodType<MoveChange> = z
  .object({
    accuracy: z.union([z.number(), z.null()]).optional(),
    power: z.union([z.number(), z.null()]).optional(),
    pp: z.union([z.number(), z.null()]).optional(),
    effect_chance: z.number().int(),
    effect_entries: z.array(
      z
        .object({
          effect: z.string(),
          short_effect: z.string(),
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    type: TypeSummary,
    version_group: VersionGroupSummary,
  })
  .passthrough();
const SuperContestEffectSummary: z.ZodType<SuperContestEffectSummary> = z
  .object({ url: z.string().url() })
  .passthrough();
const MoveTargetSummary: z.ZodType<MoveTargetSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const MoveFlavorText: z.ZodType<MoveFlavorText> = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummary,
    version_group: VersionGroupSummary,
  })
  .passthrough();
const MoveDetail: z.ZodType<MoveDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    accuracy: z.union([z.number(), z.null()]).optional(),
    effect_chance: z.number().int(),
    pp: z.union([z.number(), z.null()]).optional(),
    priority: z.union([z.number(), z.null()]).optional(),
    power: z.union([z.number(), z.null()]).optional(),
    contest_combos: z
      .object({
        normal: z
          .object({
            use_before: z
              .array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              )
              .nullable(),
            use_after: z
              .array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              )
              .nullable(),
          })
          .passthrough(),
        super: z
          .object({
            use_before: z
              .array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              )
              .nullable(),
            use_after: z
              .array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              )
              .nullable(),
          })
          .passthrough(),
      })
      .passthrough(),
    contest_type: ContestTypeSummary,
    contest_effect: ContestEffectSummary,
    damage_class: MoveDamageClassSummary,
    effect_entries: z.array(
      z
        .object({
          effect: z.string(),
          short_effect: z.string(),
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    effect_changes: z.array(
      z
        .object({
          effect_entries: z.array(
            z
              .object({
                effect: z.string(),
                language: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
              })
              .passthrough()
          ),
          version_group: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    generation: GenerationSummary,
    meta: MoveMeta,
    names: z.array(MoveName),
    past_values: z.array(MoveChange),
    stat_changes: z.array(
      z
        .object({
          change: z.number().int(),
          stat: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    super_contest_effect: SuperContestEffectSummary,
    target: MoveTargetSummary,
    type: TypeSummary,
    machines: z.array(
      z
        .object({
          machine: z.object({ url: z.string().url() }).passthrough(),
          version_group: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    flavor_text_entries: z.array(MoveFlavorText),
    learned_by_pokemon: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const PaginatedMoveMetaAilmentSummaryList: z.ZodType<PaginatedMoveMetaAilmentSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(MoveMetaAilmentSummary),
    })
    .partial()
    .passthrough();
const MoveMetaAilmentName: z.ZodType<MoveMetaAilmentName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const MoveMetaAilmentDetail: z.ZodType<MoveMetaAilmentDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    moves: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    names: z.array(MoveMetaAilmentName),
  })
  .passthrough();
const MoveBattleStyleSummary: z.ZodType<MoveBattleStyleSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedMoveBattleStyleSummaryList: z.ZodType<PaginatedMoveBattleStyleSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(MoveBattleStyleSummary),
    })
    .partial()
    .passthrough();
const MoveBattleStyleName: z.ZodType<MoveBattleStyleName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const MoveBattleStyleDetail: z.ZodType<MoveBattleStyleDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(MoveBattleStyleName),
  })
  .passthrough();
const PaginatedMoveMetaCategorySummaryList: z.ZodType<PaginatedMoveMetaCategorySummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(MoveMetaCategorySummary),
    })
    .partial()
    .passthrough();
const MoveMetaCategoryDescription: z.ZodType<MoveMetaCategoryDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const MoveMetaCategoryDetail: z.ZodType<MoveMetaCategoryDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    descriptions: z.array(MoveMetaCategoryDescription),
    moves: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const PaginatedMoveDamageClassSummaryList: z.ZodType<PaginatedMoveDamageClassSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(MoveDamageClassSummary),
    })
    .partial()
    .passthrough();
const MoveDamageClassDescription: z.ZodType<MoveDamageClassDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const MoveDamageClassName: z.ZodType<MoveDamageClassName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const MoveDamageClassDetail: z.ZodType<MoveDamageClassDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    descriptions: z.array(MoveDamageClassDescription),
    moves: z.array(MoveSummary),
    names: z.array(MoveDamageClassName),
  })
  .passthrough();
const MoveLearnMethodSummary: z.ZodType<MoveLearnMethodSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedMoveLearnMethodSummaryList: z.ZodType<PaginatedMoveLearnMethodSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(MoveLearnMethodSummary),
    })
    .partial()
    .passthrough();
const MoveLearnMethodName: z.ZodType<MoveLearnMethodName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const MoveLearnMethodDescription: z.ZodType<MoveLearnMethodDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const MoveLearnMethodDetail: z.ZodType<MoveLearnMethodDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(MoveLearnMethodName),
    descriptions: z.array(MoveLearnMethodDescription),
    version_groups: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const PaginatedMoveTargetSummaryList: z.ZodType<PaginatedMoveTargetSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(MoveTargetSummary),
    })
    .partial()
    .passthrough();
const MoveTargetDescription: z.ZodType<MoveTargetDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const MoveTargetName: z.ZodType<MoveTargetName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const MoveTargetDetail: z.ZodType<MoveTargetDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    descriptions: z.array(MoveTargetDescription),
    moves: z.array(MoveSummary),
    names: z.array(MoveTargetName),
  })
  .passthrough();
const NatureSummary: z.ZodType<NatureSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedNatureSummaryList: z.ZodType<PaginatedNatureSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(NatureSummary),
  })
  .partial()
  .passthrough();
const NatureBattleStylePreference: z.ZodType<NatureBattleStylePreference> = z
  .object({
    low_hp_preference: z.number().int(),
    high_hp_preference: z.number().int(),
    move_battle_style: MoveBattleStyleSummary,
  })
  .passthrough();
const NatureName: z.ZodType<NatureName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const NatureDetail: z.ZodType<NatureDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    decreased_stat: StatSummary,
    increased_stat: StatSummary,
    likes_flavor: BerryFlavorSummary,
    hates_flavor: BerryFlavorSummary,
    berries: z.array(BerrySummary),
    pokeathlon_stat_changes: z.array(
      z
        .object({
          max_change: z.number().int(),
          pokeathlon_stat: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    move_battle_style_preferences: z.array(NatureBattleStylePreference),
    names: z.array(NatureName),
  })
  .passthrough();
const PalParkAreaSummary: z.ZodType<PalParkAreaSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPalParkAreaSummaryList: z.ZodType<PaginatedPalParkAreaSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PalParkAreaSummary),
    })
    .partial()
    .passthrough();
const PalParkAreaName: z.ZodType<PalParkAreaName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const PalParkAreaDetail: z.ZodType<PalParkAreaDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(PalParkAreaName),
    pokemon_encounters: z.array(
      z
        .object({
          base_score: z.number().int(),
          "pokemon-species": z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          rate: z.number().int(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PokedexSummary: z.ZodType<PokedexSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPokedexSummaryList: z.ZodType<PaginatedPokedexSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(PokedexSummary),
  })
  .partial()
  .passthrough();
const PokedexDescription: z.ZodType<PokedexDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const PokedexName: z.ZodType<PokedexName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const PokedexDetail: z.ZodType<PokedexDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    is_main_series: z.boolean().optional(),
    descriptions: z.array(PokedexDescription),
    names: z.array(PokedexName),
    pokemon_entries: z.array(
      z
        .object({
          entry_number: z.number().int(),
          pokemon_species: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    region: RegionSummary,
    version_groups: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const PokemonSummary: z.ZodType<PokemonSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPokemonSummaryList: z.ZodType<PaginatedPokemonSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(PokemonSummary),
  })
  .partial()
  .passthrough();
const PokemonFormSummary: z.ZodType<PokemonFormSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const VersionSummary: z.ZodType<VersionSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PokemonGameIndex: z.ZodType<PokemonGameIndex> = z
  .object({ game_index: z.number().int(), version: VersionSummary })
  .passthrough();
const HeldItem: z.ZodType<HeldItem> = z
  .object({
    item: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
    version_details: z.array(
      z
        .object({
          rarity: z.number().int(),
          version: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PokemonDetail: z.ZodType<PokemonDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    base_experience: z.union([z.number(), z.null()]),
    height: z.union([z.number(), z.null()]),
    is_default: z.boolean(),
    order: z.union([z.number(), z.null()]),
    weight: z.union([z.number(), z.null()]),
    abilities: z.array(
      z
        .object({
          ability: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          is_hidden: z.boolean(),
          slot: z.number().int(),
        })
        .passthrough()
    ),
    past_abilities: z.array(
      z
        .object({
          abilities: z.array(
            z
              .object({
                ability: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
                is_hidden: z.boolean(),
                slot: z.number().int(),
              })
              .passthrough()
          ),
          generation: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    forms: z.array(PokemonFormSummary),
    game_indices: z.array(PokemonGameIndex),
    held_items: z.array(HeldItem),
    location_area_encounters: z.string(),
    moves: z.array(
      z
        .object({
          move: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          version_group_details: z.array(
            z
              .object({
                level_learned_at: z.number().int(),
                move_learn_method: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
                version_group: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
              })
              .passthrough()
          ),
        })
        .passthrough()
    ),
    species: PokemonSpeciesSummary,
    sprites: z
      .object({
        front_default: z.string().url(),
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      })
      .partial()
      .passthrough(),
  })
  .partial()
  .passthrough();
const PokemonColorSummary: z.ZodType<PokemonColorSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPokemonColorSummaryList: z.ZodType<PaginatedPokemonColorSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PokemonColorSummary),
    })
    .partial()
    .passthrough();
const PokemonColorName: z.ZodType<PokemonColorName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const PokemonColorDetail: z.ZodType<PokemonColorDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(PokemonColorName),
    pokemon_species: z.array(PokemonSpeciesSummary),
  })
  .passthrough();
const PaginatedPokemonFormSummaryList: z.ZodType<PaginatedPokemonFormSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PokemonFormSummary),
    })
    .partial()
    .passthrough();
const PokemonFormDetail: z.ZodType<PokemonFormDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    order: z.union([z.number(), z.null()]).optional(),
    form_order: z.union([z.number(), z.null()]).optional(),
    is_default: z.boolean().optional(),
    is_battle_only: z.boolean().optional(),
    is_mega: z.boolean().optional(),
    form_name: z.string().max(30),
    pokemon: PokemonSummary,
    sprites: z.record(z.string().url().nullable()),
    version_group: VersionGroupSummary,
    form_names: z.array(
      z
        .object({
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          name: z.string(),
        })
        .passthrough()
    ),
    names: z.array(
      z
        .object({
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          name: z.string(),
        })
        .passthrough()
    ),
    types: z.array(
      z
        .object({
          slot: z.number().int(),
          type: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PokemonHabitatSummary: z.ZodType<PokemonHabitatSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPokemonHabitatSummaryList: z.ZodType<PaginatedPokemonHabitatSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PokemonHabitatSummary),
    })
    .partial()
    .passthrough();
const PokemonHabitatName: z.ZodType<PokemonHabitatName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const PokemonHabitatDetail: z.ZodType<PokemonHabitatDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(PokemonHabitatName),
    pokemon_species: z.array(PokemonSpeciesSummary),
  })
  .passthrough();
const PokemonShapeSummary: z.ZodType<PokemonShapeSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPokemonShapeSummaryList: z.ZodType<PaginatedPokemonShapeSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PokemonShapeSummary),
    })
    .partial()
    .passthrough();
const PokemonShapeDetail: z.ZodType<PokemonShapeDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    awesome_names: z.array(
      z
        .object({
          awesome_name: z.string(),
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    names: z.array(
      z.object({ url: z.string().url(), name: z.string() }).passthrough()
    ),
    pokemon_species: z.array(PokemonSpeciesSummary),
  })
  .passthrough();
const PaginatedPokemonSpeciesSummaryList: z.ZodType<PaginatedPokemonSpeciesSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PokemonSpeciesSummary),
    })
    .partial()
    .passthrough();
const PokemonDexEntry: z.ZodType<PokemonDexEntry> = z
  .object({ entry_number: z.number().int(), pokedex: PokedexSummary })
  .passthrough();
const PokemonSpeciesDescription: z.ZodType<PokemonSpeciesDescription> = z
  .object({
    description: z.string().max(1000).optional(),
    language: LanguageSummary,
  })
  .passthrough();
const PokemonSpeciesFlavorText: z.ZodType<PokemonSpeciesFlavorText> = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummary,
    version: VersionSummary,
  })
  .passthrough();
const PokemonSpeciesDetail: z.ZodType<PokemonSpeciesDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    order: z.union([z.number(), z.null()]).optional(),
    gender_rate: z.union([z.number(), z.null()]).optional(),
    capture_rate: z.union([z.number(), z.null()]).optional(),
    base_happiness: z.union([z.number(), z.null()]).optional(),
    is_baby: z.boolean().optional(),
    is_legendary: z.boolean().optional(),
    is_mythical: z.boolean().optional(),
    hatch_counter: z.union([z.number(), z.null()]).optional(),
    has_gender_differences: z.boolean().optional(),
    forms_switchable: z.boolean().optional(),
    growth_rate: GrowthRateSummary,
    pokedex_numbers: z.array(PokemonDexEntry),
    egg_groups: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    color: PokemonColorSummary,
    shape: PokemonShapeSummary,
    evolves_from_species: PokemonSpeciesSummary,
    evolution_chain: EvolutionChainSummary,
    habitat: PokemonHabitatSummary,
    generation: GenerationSummary,
    names: z.array(
      z
        .object({
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          name: z.string(),
        })
        .passthrough()
    ),
    pal_park_encounters: z.array(
      z
        .object({
          area: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          base_score: z.number().int(),
          rate: z.number().int(),
        })
        .passthrough()
    ),
    form_descriptions: z.array(PokemonSpeciesDescription),
    flavor_text_entries: z.array(PokemonSpeciesFlavorText),
    genera: z.array(
      z
        .object({
          genus: z.string(),
          language: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
    varieties: z.array(
      z
        .object({
          is_default: z.boolean(),
          pokemon: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PokeathlonStatSummary: z.ZodType<PokeathlonStatSummary> = z
  .object({ name: z.string().max(100), url: z.string().url() })
  .passthrough();
const PaginatedPokeathlonStatSummaryList: z.ZodType<PaginatedPokeathlonStatSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(PokeathlonStatSummary),
    })
    .partial()
    .passthrough();
const PokeathlonStatName: z.ZodType<PokeathlonStatName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const PokeathlonStatDetail: z.ZodType<PokeathlonStatDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    affecting_natures: z
      .object({
        decrease: z.array(
          z
            .object({
              max_change: z.number().int().lte(-1),
              nature: z
                .object({ name: z.string(), url: z.string().url() })
                .passthrough(),
            })
            .passthrough()
        ),
        increase: z.array(
          z
            .object({
              max_change: z.number().int().gte(1),
              nature: z
                .object({ name: z.string(), url: z.string().url() })
                .passthrough(),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    names: z.array(PokeathlonStatName),
  })
  .passthrough();
const PaginatedRegionSummaryList: z.ZodType<PaginatedRegionSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(RegionSummary),
  })
  .partial()
  .passthrough();
const RegionName: z.ZodType<RegionName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const RegionDetail: z.ZodType<RegionDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    locations: z.array(LocationSummary),
    main_generation: GenerationSummary,
    names: z.array(RegionName),
    pokedexes: z.array(PokedexSummary),
    version_groups: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
  })
  .passthrough();
const PaginatedStatSummaryList: z.ZodType<PaginatedStatSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(StatSummary),
  })
  .partial()
  .passthrough();
const StatName: z.ZodType<StatName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const StatDetail: z.ZodType<StatDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    game_index: z.number().int(),
    is_battle_only: z.boolean().optional(),
    affecting_moves: z
      .object({
        increase: z.array(
          z
            .object({
              change: z.number().int(),
              move: z
                .object({ name: z.string(), url: z.string().url() })
                .passthrough(),
            })
            .passthrough()
        ),
        decrease: z.array(
          z
            .object({
              change: z.number().int(),
              move: z
                .object({ name: z.string(), url: z.string().url() })
                .passthrough(),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    affecting_natures: z
      .object({
        increase: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
        decrease: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
      })
      .passthrough(),
    characteristics: z.array(CharacteristicSummary),
    move_damage_class: MoveDamageClassSummary,
    names: z.array(StatName),
  })
  .passthrough();
const PaginatedSuperContestEffectSummaryList: z.ZodType<PaginatedSuperContestEffectSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(SuperContestEffectSummary),
    })
    .partial()
    .passthrough();
const SuperContestEffectFlavorText: z.ZodType<SuperContestEffectFlavorText> = z
  .object({ flavor_text: z.string().max(500), language: LanguageSummary })
  .passthrough();
const SuperContestEffectDetail: z.ZodType<SuperContestEffectDetail> = z
  .object({
    id: z.number().int(),
    appeal: z.number().int(),
    flavor_text_entries: z.array(SuperContestEffectFlavorText),
    moves: z.array(MoveSummary),
  })
  .passthrough();
const PaginatedTypeSummaryList: z.ZodType<PaginatedTypeSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(TypeSummary),
  })
  .partial()
  .passthrough();
const TypeGameIndex: z.ZodType<TypeGameIndex> = z
  .object({ game_index: z.number().int(), generation: GenerationSummary })
  .passthrough();
const TypeDetail: z.ZodType<TypeDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    damage_relations: z
      .object({
        no_damage_to: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
        half_damage_to: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
        double_damage_to: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
        no_damage_from: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
        half_damage_from: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
        double_damage_from: z.array(
          z.object({ name: z.string(), url: z.string().url() }).passthrough()
        ),
      })
      .passthrough(),
    past_damage_relations: z.array(
      z
        .object({
          generation: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          damage_relations: z
            .object({
              no_damage_to: z.array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              ),
              half_damage_to: z.array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              ),
              double_damage_to: z.array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              ),
              no_damage_from: z.array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              ),
              half_damage_from: z.array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              ),
              double_damage_from: z.array(
                z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough()
              ),
            })
            .passthrough(),
        })
        .passthrough()
    ),
    game_indices: z.array(TypeGameIndex),
    generation: GenerationSummary,
    move_damage_class: MoveDamageClassSummary,
    names: z.array(AbilityName),
    pokemon: z.array(
      z
        .object({
          slot: z.number().int().optional(),
          pokemon: z
            .object({ name: z.string(), url: z.string().url() })
            .partial()
            .passthrough()
            .optional(),
        })
        .passthrough()
    ),
    moves: z.array(MoveSummary),
  })
  .passthrough();
const PaginatedVersionSummaryList: z.ZodType<PaginatedVersionSummaryList> = z
  .object({
    count: z.number().int(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(VersionSummary),
  })
  .partial()
  .passthrough();
const VersionName: z.ZodType<VersionName> = z
  .object({ name: z.string().max(100), language: LanguageSummary })
  .passthrough();
const VersionDetail: z.ZodType<VersionDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    names: z.array(VersionName),
    version_group: VersionGroupSummary,
  })
  .passthrough();
const PaginatedVersionGroupSummaryList: z.ZodType<PaginatedVersionGroupSummaryList> =
  z
    .object({
      count: z.number().int(),
      next: z.string().url().nullable(),
      previous: z.string().url().nullable(),
      results: z.array(VersionGroupSummary),
    })
    .partial()
    .passthrough();
const VersionGroupDetail: z.ZodType<VersionGroupDetail> = z
  .object({
    id: z.number().int(),
    name: z.string().max(100),
    order: z.union([z.number(), z.null()]).optional(),
    generation: GenerationSummary,
    move_learn_methods: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    pokedexes: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    regions: z.array(
      z.object({ name: z.string(), url: z.string().url() }).passthrough()
    ),
    versions: z.array(VersionSummary),
  })
  .passthrough();

export const schemas = {
  AbilitySummary,
  PaginatedAbilitySummaryList,
  GenerationSummary,
  LanguageSummary,
  AbilityName,
  AbilityEffectText,
  VersionGroupSummary,
  AbilityChangeEffectText,
  AbilityChange,
  AbilityFlavorText,
  AbilityDetail,
  BerrySummary,
  PaginatedBerrySummaryList,
  BerryFirmnessSummary,
  ItemSummary,
  TypeSummary,
  BerryDetail,
  PaginatedBerryFirmnessSummaryList,
  BerryFirmnessName,
  BerryFirmnessDetail,
  BerryFlavorSummary,
  PaginatedBerryFlavorSummaryList,
  ContestTypeSummary,
  BerryFlavorName,
  BerryFlavorDetail,
  CharacteristicSummary,
  PaginatedCharacteristicSummaryList,
  StatSummary,
  CharacteristicDescription,
  CharacteristicDetail,
  PaginatedContestTypeSummaryList,
  ContestTypeName,
  ContestTypeDetail,
  ContestEffectSummary,
  PaginatedContestEffectSummaryList,
  ContestEffectEffectText,
  ContestEffectFlavorText,
  ContestEffectDetail,
  EggGroupSummary,
  PaginatedEggGroupSummaryList,
  EggGroupName,
  EggGroupDetail,
  EncounterMethodSummary,
  PaginatedEncounterMethodSummaryList,
  EncounterMethodName,
  EncounterMethodDetail,
  EncounterConditionSummary,
  PaginatedEncounterConditionSummaryList,
  EncounterConditionValueSummary,
  EncounterConditionName,
  EncounterConditionDetail,
  PaginatedEncounterConditionValueSummaryList,
  EncounterConditionValueName,
  EncounterConditionValueDetail,
  EvolutionChainSummary,
  PaginatedEvolutionChainSummaryList,
  EvolutionChainDetail,
  EvolutionTriggerSummary,
  PaginatedEvolutionTriggerSummaryList,
  EvolutionTriggerName,
  EvolutionTriggerDetail,
  PaginatedGenerationSummaryList,
  RegionSummary,
  MoveSummary,
  GenerationName,
  PokemonSpeciesSummary,
  GenerationDetail,
  GenderSummary,
  PaginatedGenderSummaryList,
  GenderDetail,
  GrowthRateSummary,
  PaginatedGrowthRateSummaryList,
  GrowthRateDescription,
  Experience,
  GrowthRateDetail,
  PaginatedItemSummaryList,
  ItemFlingEffectSummary,
  ItemCategorySummary,
  ItemEffectText,
  ItemFlavorText,
  ItemGameIndex,
  ItemName,
  ItemDetail,
  PaginatedItemCategorySummaryList,
  ItemCategoryName,
  ItemPocketSummary,
  ItemCategoryDetail,
  ItemAttributeSummary,
  PaginatedItemAttributeSummaryList,
  ItemAttributeDescription,
  ItemAttributeName,
  ItemAttributeDetail,
  PaginatedItemFlingEffectSummaryList,
  ItemFlingEffectEffectText,
  ItemFlingEffectDetail,
  PaginatedItemPocketSummaryList,
  ItemPocketName,
  ItemPocketDetail,
  PaginatedLanguageSummaryList,
  LanguageName,
  LanguageDetail,
  LocationSummary,
  PaginatedLocationSummaryList,
  LocationName,
  LocationGameIndex,
  LocationAreaSummary,
  LocationDetail,
  PaginatedLocationAreaSummaryList,
  LocationAreaName,
  LocationAreaDetail,
  MachineSummary,
  PaginatedMachineSummaryList,
  MachineDetail,
  PaginatedMoveSummaryList,
  MoveDamageClassSummary,
  MoveMetaAilmentSummary,
  MoveMetaCategorySummary,
  MoveMeta,
  MoveName,
  MoveChange,
  SuperContestEffectSummary,
  MoveTargetSummary,
  MoveFlavorText,
  MoveDetail,
  PaginatedMoveMetaAilmentSummaryList,
  MoveMetaAilmentName,
  MoveMetaAilmentDetail,
  MoveBattleStyleSummary,
  PaginatedMoveBattleStyleSummaryList,
  MoveBattleStyleName,
  MoveBattleStyleDetail,
  PaginatedMoveMetaCategorySummaryList,
  MoveMetaCategoryDescription,
  MoveMetaCategoryDetail,
  PaginatedMoveDamageClassSummaryList,
  MoveDamageClassDescription,
  MoveDamageClassName,
  MoveDamageClassDetail,
  MoveLearnMethodSummary,
  PaginatedMoveLearnMethodSummaryList,
  MoveLearnMethodName,
  MoveLearnMethodDescription,
  MoveLearnMethodDetail,
  PaginatedMoveTargetSummaryList,
  MoveTargetDescription,
  MoveTargetName,
  MoveTargetDetail,
  NatureSummary,
  PaginatedNatureSummaryList,
  NatureBattleStylePreference,
  NatureName,
  NatureDetail,
  PalParkAreaSummary,
  PaginatedPalParkAreaSummaryList,
  PalParkAreaName,
  PalParkAreaDetail,
  PokedexSummary,
  PaginatedPokedexSummaryList,
  PokedexDescription,
  PokedexName,
  PokedexDetail,
  PokemonSummary,
  PaginatedPokemonSummaryList,
  PokemonFormSummary,
  VersionSummary,
  PokemonGameIndex,
  HeldItem,
  PokemonDetail,
  PokemonColorSummary,
  PaginatedPokemonColorSummaryList,
  PokemonColorName,
  PokemonColorDetail,
  PaginatedPokemonFormSummaryList,
  PokemonFormDetail,
  PokemonHabitatSummary,
  PaginatedPokemonHabitatSummaryList,
  PokemonHabitatName,
  PokemonHabitatDetail,
  PokemonShapeSummary,
  PaginatedPokemonShapeSummaryList,
  PokemonShapeDetail,
  PaginatedPokemonSpeciesSummaryList,
  PokemonDexEntry,
  PokemonSpeciesDescription,
  PokemonSpeciesFlavorText,
  PokemonSpeciesDetail,
  PokeathlonStatSummary,
  PaginatedPokeathlonStatSummaryList,
  PokeathlonStatName,
  PokeathlonStatDetail,
  PaginatedRegionSummaryList,
  RegionName,
  RegionDetail,
  PaginatedStatSummaryList,
  StatName,
  StatDetail,
  PaginatedSuperContestEffectSummaryList,
  SuperContestEffectFlavorText,
  SuperContestEffectDetail,
  PaginatedTypeSummaryList,
  TypeGameIndex,
  TypeDetail,
  PaginatedVersionSummaryList,
  VersionName,
  VersionDetail,
  PaginatedVersionGroupSummaryList,
  VersionGroupDetail,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/v2/ability/",
    alias: "ability_list",
    description: `Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedAbilitySummaryList,
  },
  {
    method: "get",
    path: "/api/v2/ability/:id/",
    alias: "ability_retrieve",
    description: `Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: AbilityDetail,
  },
  {
    method: "get",
    path: "/api/v2/berry-firmness/",
    alias: "berry_firmness_list",
    description: `Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedBerryFirmnessSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/berry-firmness/:id/",
    alias: "berry_firmness_retrieve",
    description: `Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: BerryFirmnessDetail,
  },
  {
    method: "get",
    path: "/api/v2/berry-flavor/",
    alias: "berry_flavor_list",
    description: `Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedBerryFlavorSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/berry-flavor/:id/",
    alias: "berry_flavor_retrieve",
    description: `Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: BerryFlavorDetail,
  },
  {
    method: "get",
    path: "/api/v2/berry/",
    alias: "berry_list",
    description: `Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedBerrySummaryList,
  },
  {
    method: "get",
    path: "/api/v2/berry/:id/",
    alias: "berry_retrieve",
    description: `Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: BerryDetail,
  },
  {
    method: "get",
    path: "/api/v2/characteristic/",
    alias: "characteristic_list",
    description: `Characteristics indicate which stat contains a Pokémon&#x27;s highest IV. A Pokémon&#x27;s Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedCharacteristicSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/characteristic/:id/",
    alias: "characteristic_retrieve",
    description: `Characteristics indicate which stat contains a Pokémon&#x27;s highest IV. A Pokémon&#x27;s Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: CharacteristicDetail,
  },
  {
    method: "get",
    path: "/api/v2/contest-effect/",
    alias: "contest_effect_list",
    description: `Contest effects refer to the effects of moves when used in contests.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedContestEffectSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/contest-effect/:id/",
    alias: "contest_effect_retrieve",
    description: `Contest effects refer to the effects of moves when used in contests.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ContestEffectDetail,
  },
  {
    method: "get",
    path: "/api/v2/contest-type/",
    alias: "contest_type_list",
    description: `Contest types are categories judges used to weigh a Pokémon&#x27;s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedContestTypeSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/contest-type/:id/",
    alias: "contest_type_retrieve",
    description: `Contest types are categories judges used to weigh a Pokémon&#x27;s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ContestTypeDetail,
  },
  {
    method: "get",
    path: "/api/v2/egg-group/",
    alias: "egg_group_list",
    description: `Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedEggGroupSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/egg-group/:id/",
    alias: "egg_group_retrieve",
    description: `Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EggGroupDetail,
  },
  {
    method: "get",
    path: "/api/v2/encounter-condition-value/",
    alias: "encounter_condition_value_list",
    description: `Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedEncounterConditionValueSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/encounter-condition-value/:id/",
    alias: "encounter_condition_value_retrieve",
    description: `Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EncounterConditionValueDetail,
  },
  {
    method: "get",
    path: "/api/v2/encounter-condition/",
    alias: "encounter_condition_list",
    description: `Conditions which affect what pokemon might appear in the wild, e.g., day or night.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedEncounterConditionSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/encounter-condition/:id/",
    alias: "encounter_condition_retrieve",
    description: `Conditions which affect what pokemon might appear in the wild, e.g., day or night.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EncounterConditionDetail,
  },
  {
    method: "get",
    path: "/api/v2/encounter-method/",
    alias: "encounter_method_list",
    description: `Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedEncounterMethodSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/encounter-method/:id/",
    alias: "encounter_method_retrieve",
    description: `Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EncounterMethodDetail,
  },
  {
    method: "get",
    path: "/api/v2/evolution-chain/",
    alias: "evolution_chain_list",
    description: `Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedEvolutionChainSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/evolution-chain/:id/",
    alias: "evolution_chain_retrieve",
    description: `Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EvolutionChainDetail,
  },
  {
    method: "get",
    path: "/api/v2/evolution-trigger/",
    alias: "evolution_trigger_list",
    description: `Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedEvolutionTriggerSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/evolution-trigger/:id/",
    alias: "evolution_trigger_retrieve",
    description: `Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: EvolutionTriggerDetail,
  },
  {
    method: "get",
    path: "/api/v2/gender/",
    alias: "gender_list",
    description: `Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedGenderSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/gender/:id/",
    alias: "gender_retrieve",
    description: `Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: GenderDetail,
  },
  {
    method: "get",
    path: "/api/v2/generation/",
    alias: "generation_list",
    description: `A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedGenerationSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/generation/:id/",
    alias: "generation_retrieve",
    description: `A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: GenerationDetail,
  },
  {
    method: "get",
    path: "/api/v2/growth-rate/",
    alias: "growth_rate_list",
    description: `Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedGrowthRateSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/growth-rate/:id/",
    alias: "growth_rate_retrieve",
    description: `Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: GrowthRateDetail,
  },
  {
    method: "get",
    path: "/api/v2/item-attribute/",
    alias: "item_attribute_list",
    description: `Item attributes define particular aspects of items, e.g.&quot;usable in battle&quot; or &quot;consumable&quot;.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedItemAttributeSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/item-attribute/:id/",
    alias: "item_attribute_retrieve",
    description: `Item attributes define particular aspects of items, e.g.&quot;usable in battle&quot; or &quot;consumable&quot;.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ItemAttributeDetail,
  },
  {
    method: "get",
    path: "/api/v2/item-category/",
    alias: "item_category_list",
    description: `Item categories determine where items will be placed in the players bag.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedItemCategorySummaryList,
  },
  {
    method: "get",
    path: "/api/v2/item-category/:id/",
    alias: "item_category_retrieve",
    description: `Item categories determine where items will be placed in the players bag.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ItemCategoryDetail,
  },
  {
    method: "get",
    path: "/api/v2/item-fling-effect/",
    alias: "item_fling_effect_list",
    description: `The various effects of the move&quot;Fling&quot; when used with different items.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedItemFlingEffectSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/item-fling-effect/:id/",
    alias: "item_fling_effect_retrieve",
    description: `The various effects of the move&quot;Fling&quot; when used with different items.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ItemFlingEffectDetail,
  },
  {
    method: "get",
    path: "/api/v2/item-pocket/",
    alias: "item_pocket_list",
    description: `Pockets within the players bag used for storing items by category.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedItemPocketSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/item-pocket/:id/",
    alias: "item_pocket_retrieve",
    description: `Pockets within the players bag used for storing items by category.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ItemPocketDetail,
  },
  {
    method: "get",
    path: "/api/v2/item/",
    alias: "item_list",
    description: `An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedItemSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/item/:id/",
    alias: "item_retrieve",
    description: `An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: ItemDetail,
  },
  {
    method: "get",
    path: "/api/v2/language/",
    alias: "language_list",
    description: `Languages for translations of API resource information.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedLanguageSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/language/:id/",
    alias: "language_retrieve",
    description: `Languages for translations of API resource information.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: LanguageDetail,
  },
  {
    method: "get",
    path: "/api/v2/location-area/",
    alias: "location_area_list",
    description: `Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
    ],
    response: PaginatedLocationAreaSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/location-area/:id/",
    alias: "location_area_retrieve",
    description: `Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: LocationAreaDetail,
  },
  {
    method: "get",
    path: "/api/v2/location/",
    alias: "location_list",
    description: `Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedLocationSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/location/:id/",
    alias: "location_retrieve",
    description: `Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: LocationDetail,
  },
  {
    method: "get",
    path: "/api/v2/machine/",
    alias: "machine_list",
    description: `Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMachineSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/machine/:id/",
    alias: "machine_retrieve",
    description: `Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MachineDetail,
  },
  {
    method: "get",
    path: "/api/v2/move-ailment/",
    alias: "move_ailment_list",
    description: `Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveMetaAilmentSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move-ailment/:id/",
    alias: "move_ailment_retrieve",
    description: `Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveMetaAilmentDetail,
  },
  {
    method: "get",
    path: "/api/v2/move-battle-style/",
    alias: "move_battle_style_list",
    description: `Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveBattleStyleSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move-battle-style/:id/",
    alias: "move_battle_style_retrieve",
    description: `Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveBattleStyleDetail,
  },
  {
    method: "get",
    path: "/api/v2/move-category/",
    alias: "move_category_list",
    description: `Very general categories that loosely group move effects.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveMetaCategorySummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move-category/:id/",
    alias: "move_category_retrieve",
    description: `Very general categories that loosely group move effects.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveMetaCategoryDetail,
  },
  {
    method: "get",
    path: "/api/v2/move-damage-class/",
    alias: "move_damage_class_list",
    description: `Damage classes moves can have, e.g. physical, special, or non-damaging.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveDamageClassSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move-damage-class/:id/",
    alias: "move_damage_class_retrieve",
    description: `Damage classes moves can have, e.g. physical, special, or non-damaging.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveDamageClassDetail,
  },
  {
    method: "get",
    path: "/api/v2/move-learn-method/",
    alias: "move_learn_method_list",
    description: `Methods by which Pokémon can learn moves.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveLearnMethodSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move-learn-method/:id/",
    alias: "move_learn_method_retrieve",
    description: `Methods by which Pokémon can learn moves.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveLearnMethodDetail,
  },
  {
    method: "get",
    path: "/api/v2/move-target/",
    alias: "move_target_list",
    description: `Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveTargetSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move-target/:id/",
    alias: "move_target_retrieve",
    description: `Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveTargetDetail,
  },
  {
    method: "get",
    path: "/api/v2/move/",
    alias: "move_list",
    description: `Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedMoveSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/move/:id/",
    alias: "move_retrieve",
    description: `Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MoveDetail,
  },
  {
    method: "get",
    path: "/api/v2/nature/",
    alias: "nature_list",
    description: `Natures influence how a Pokémon&#x27;s stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedNatureSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/nature/:id/",
    alias: "nature_retrieve",
    description: `Natures influence how a Pokémon&#x27;s stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: NatureDetail,
  },
  {
    method: "get",
    path: "/api/v2/pal-park-area/",
    alias: "pal_park_area_list",
    description: `Areas used for grouping Pokémon encounters in Pal Park. They&#x27;re like habitats that are specific to Pal Park.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPalParkAreaSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pal-park-area/:id/",
    alias: "pal_park_area_retrieve",
    description: `Areas used for grouping Pokémon encounters in Pal Park. They&#x27;re like habitats that are specific to Pal Park.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PalParkAreaDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokeathlon-stat/",
    alias: "pokeathlon_stat_list",
    description: `Pokeathlon Stats are different attributes of a Pokémon&#x27;s performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokeathlonStatSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokeathlon-stat/:id/",
    alias: "pokeathlon_stat_retrieve",
    description: `Pokeathlon Stats are different attributes of a Pokémon&#x27;s performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokeathlonStatDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokedex/",
    alias: "pokedex_list",
    description: `A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokedexSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokedex/:id/",
    alias: "pokedex_retrieve",
    description: `A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokedexDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-color/",
    alias: "pokemon_color_list",
    description: `Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon&#x27;s body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokemonColorSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-color/:id/",
    alias: "pokemon_color_retrieve",
    description: `Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon&#x27;s body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokemonColorDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-form/",
    alias: "pokemon_form_list",
    description: `Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the &#x27;Pokémon&#x27; entity is used to represent such a variety.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokemonFormSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-form/:id/",
    alias: "pokemon_form_retrieve",
    description: `Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the &#x27;Pokémon&#x27; entity is used to represent such a variety.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokemonFormDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-habitat/",
    alias: "pokemon_habitat_list",
    description: `Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokemonHabitatSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-habitat/:id/",
    alias: "pokemon_habitat_retrieve",
    description: `Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokemonHabitatDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-shape/",
    alias: "pokemon_shape_list",
    description: `Shapes used for sorting Pokémon in a Pokédex.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokemonShapeSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-shape/:id/",
    alias: "pokemon_shape_retrieve",
    description: `Shapes used for sorting Pokémon in a Pokédex.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokemonShapeDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-species/",
    alias: "pokemon_species_list",
    description: `A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokemonSpeciesSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokemon-species/:id/",
    alias: "pokemon_species_retrieve",
    description: `A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokemonSpeciesDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon/",
    alias: "pokemon_list",
    description: `Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedPokemonSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/pokemon/:id/",
    alias: "pokemon_retrieve",
    description: `Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PokemonDetail,
  },
  {
    method: "get",
    path: "/api/v2/pokemon/:pokemon_id/encounters",
    alias: "pokemon_encounters_retrieve",
    description: `Handles Pokemon Encounters as a sub-resource.`,
    requestFormat: "json",
    parameters: [
      {
        name: "pokemon_id",
        type: "Path",
        schema: z.string().regex(/^\d+$/),
      },
    ],
    response: z.array(
      z
        .object({
          location_area: z
            .object({ name: z.string(), url: z.string().url() })
            .passthrough(),
          version_details: z.array(
            z
              .object({
                encounter_details: z.array(
                  z
                    .object({
                      chance: z.number(),
                      condition_values: z.array(
                        z
                          .object({ name: z.string(), url: z.string().url() })
                          .passthrough()
                      ),
                      max_level: z.number(),
                      method: z
                        .object({ name: z.string(), url: z.string().url() })
                        .passthrough(),
                      min_level: z.number(),
                    })
                    .passthrough()
                ),
                max_chance: z.number(),
                version: z
                  .object({ name: z.string(), url: z.string().url() })
                  .passthrough(),
              })
              .passthrough()
          ),
        })
        .passthrough()
    ),
  },
  {
    method: "get",
    path: "/api/v2/region/",
    alias: "region_list",
    description: `A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedRegionSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/region/:id/",
    alias: "region_retrieve",
    description: `A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: RegionDetail,
  },
  {
    method: "get",
    path: "/api/v2/stat/",
    alias: "stat_list",
    description: `Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedStatSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/stat/:id/",
    alias: "stat_retrieve",
    description: `Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: StatDetail,
  },
  {
    method: "get",
    path: "/api/v2/super-contest-effect/",
    alias: "super_contest_effect_list",
    description: `Super contest effects refer to the effects of moves when used in super contests.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedSuperContestEffectSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/super-contest-effect/:id/",
    alias: "super_contest_effect_retrieve",
    description: `Super contest effects refer to the effects of moves when used in super contests.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: SuperContestEffectDetail,
  },
  {
    method: "get",
    path: "/api/v2/type/",
    alias: "type_list",
    description: `Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedTypeSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/type/:id/",
    alias: "type_retrieve",
    description: `Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: TypeDetail,
  },
  {
    method: "get",
    path: "/api/v2/version-group/",
    alias: "version_group_list",
    description: `Version groups categorize highly similar versions of the games.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedVersionGroupSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/version-group/:id/",
    alias: "version_group_retrieve",
    description: `Version groups categorize highly similar versions of the games.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VersionGroupDetail,
  },
  {
    method: "get",
    path: "/api/v2/version/",
    alias: "version_list",
    description: `Versions of the games, e.g., Red, Blue or Yellow.`,
    requestFormat: "json",
    parameters: [
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "q",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: PaginatedVersionSummaryList,
  },
  {
    method: "get",
    path: "/api/v2/version/:id/",
    alias: "version_retrieve",
    description: `Versions of the games, e.g., Red, Blue or Yellow.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: VersionDetail,
  },
]);

export const pokeapiClient = new Zodios("https://pokeapi.co", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
