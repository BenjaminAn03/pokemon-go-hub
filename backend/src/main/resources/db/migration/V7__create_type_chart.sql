CREATE TABLE type_chart (
    attacking_type VARCHAR(20) NOT NULL, 
    defending_type VARCHAR(20) NOT NULL, 
    multiplier DOUBLE PRECISION NOT NULL,

    PRIMARY KEY (attacking_type, defending_type)
);
