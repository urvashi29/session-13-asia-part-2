import React from 'react';
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';
import { AddData } from './AddData';

export const Display = () => {
    const [list, setList] = useRecoilState(atomData);
    console.log(list);

    return (
        <>
            <AddData />
            {list.length > 0 ? (list.map(info => {
                return (
                    <React.Fragment key={info.id}>
                        {info.text}
                    </React.Fragment>
                )
            })) : (<></>)}
        </>
    )
}