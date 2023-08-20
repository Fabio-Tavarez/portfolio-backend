\c books_dev

INSERT INTO 
    book
 ( series, volume, price, rating, author, favorite, genre, description) 
VALUES
('One Piece', 103, 9.99, 5, 'Eiichiro Oda', true, 'Action-Adventure, Fantasy', 'As Sanji and Zolo defeat the two remaining Lead Performers of the Animal Kingdom pirates, the battle intensifies between Luffy and Kaido! Meanwhile, Kid and Law are locked in a furious melee with Big Mom. Can the upstarts defeat two reigning Emperors of the Sea?!'),
('Jujutsu Kaisen', 20, 9.99, 5, 'Gege Akutami', true, 'Action-Adventure, Supernatural', 'Fushiguro and Reggie have nearly crushed each other to death. Reggie makes a move to break the stalemate and bring their battle to its climax! Meanwhile, Okkotsu disrupts the four-way standoff between jujutsu fighters in the Sendai colony, leading to a fierce battle involving reincarnated sorcerers and a special grade cursed spirit!'),
('Fullmetal Alchemist', 27, 9.99, 5, 'Hiromu Arakawa', true, 'Action-Adventure, Fantasy, Science Fiction', 'With the help of Hohenheim and their allies, the Elric brothers launch a desperate final attack against the homunculus “father.” But to claim victory, some may have to make the ultimate sacrifice. And when the dust clears, will a happy ending await our favorite characters in the final volume of Fullmetal Alchemist?'),
('Bleach', 74, 9.99, 5, 'Tite Kubo', true, 'Action-Adventure, Supernatural', 'The final battle against Yhwach gets under way as Ichigo and his allies reach the Quincy King’s throne room. Can Ichigo put an end to the thousand-year war between the Soul Reapers and Quincies? The emotional conclusion of Bleach is here!'),
('Naruto', 72, 9.99, 5, 'Masashi Kishimoto', true, 'Action-Adventure, Fantasy','With Naruto and Sasuke working together, Kaguya is finally sealed away for good. But just when it seems that the ninja world can find true peace, one more obstacle appears. Fueled by opposing ideals, Naruto and Sasuke will determine the future of the world in one final fight!');

INSERT INTO 
    comments 
(commenter, content, book_id) 
VALUES 
('OPlover','The worst gen is the best','1'),
('kjbgjar','Yuta is so cool','2'),
('eagnbeaj','I will miss this show','3'),
('IchiGOAT','THAT WHY HE IS THE GOAT!!!!','4'),
('narutofanboy11','DATTEBAYO!!!!!!','5');