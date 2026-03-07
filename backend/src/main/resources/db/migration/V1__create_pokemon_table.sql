CREATE TABLE pokemon (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, 
    type1 VARCHAR(20) NOT NULL, 
    type2 VARCHAR(20),
    CONSTRAINT pokemon_type2_diff CHECK (type2 IS NULL OR type2 <> type1)
);
