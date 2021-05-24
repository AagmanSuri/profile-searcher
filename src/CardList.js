import React from 'react';
import Card from './Card';

const CardList = ({Profile}) => {
        return ( 
        <div> {
                Profile.map((students, i) => {
            //key given for the purpose that it is a loop and we need to give an unique value
                        return ( 
                        <Card key = {i}
                            id = {students.id}
                            name = {students.name}
                            standard = {students.standard}
                            Language={students.Language}
                            CodingLvl={students.CodingLvl}
                            email = {students.email}
                            />
                        )
                    })
                } </div>
            );
        }
        export default CardList;