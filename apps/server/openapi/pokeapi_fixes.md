To be fix:
1.
```ts
const EvolutionChainDetail: z.ZodType<EvolutionChainDetail> = {
    chain: {
        evolves_to: {
            evolution_details: {
                gender: z
                      .object({ name: z.string(), url: z.string().url() })
                      .passthrough()
                      .nullable(), //error here <-  Type 'null' is not assignable to type '{ name: string; url: string; }'. 
            }
        }
    }
}
```

2. openapi-zod-client has any issue with generating types - it does generate zod schemas with .nullable() (which is corect), but it doesn't add it to the types which causes misalignment between schemas and types 

Example: 
PokemonDetail->held_items

openapi.yaml
```yaml
    gender:
        type: object
        nullable: true # nullable set to true
        required:
        - name
        - url
        properties:
        name:
            type: string
            examples:
            - 1
        url:
            type: string
            format: uri
            examples:
            - 2
```

```ts
const EvolutionChainDetail: z.ZodType<EvolutionChainDetail> = z.object({
    gender: z
        .object({ name: z.string(), url: z.string().url() })
        .passthrough()
        .nullable() / /property set nullable
})
```

but 

```ts
type EvolutionChainDetail = {
    gender: {
        name: string;
        url: string;
    }; // missing | null
}
```