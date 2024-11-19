import React from 'react';
import { EmptyState } from '../../components/ui/empty-state';
import Sort from './sort';
import { Button } from "@chakra-ui/react";
import { MdOutlineLibraryAdd } from "react-icons/md";
function TaskList () {
    const list = 0;

    if (list === 0) {
        return (
            <>
                <Sort/>
                <EmptyState icon={<MdOutlineLibraryAdd color="darkgray"/>} title="Your queue is empty!" description="Add new tasks to get busy">
                    <Button>Create Task</Button>
                </EmptyState>
            </>
            
        )
    }

    return (
        <>
            <Sort/>
            
                    
        </>
    );
};

export default TaskList;
