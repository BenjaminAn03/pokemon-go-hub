CREATE TABLE pokemon_stats (
    id BIGINT PRIMARY KEY, 
    base_attack INT NOT NULL,
    base_defense INT NOT NULL, 
    base_stamina INT NOT NULL,
    FOREIGN KEY (id) REFERENCES pokedex(id) ON DELETE CASCADE
);
