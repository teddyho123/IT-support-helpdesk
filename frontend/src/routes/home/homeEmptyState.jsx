import { Button } from "@chakra-ui/react";
import { EmptyState } from "../../components/ui/empty-state"
import { MdOutlineLibraryAdd } from "react-icons/md";
function HomeEmptyState() {
    return (
        <EmptyState icon={<MdOutlineLibraryAdd color="darkgray"/>} title="Your queue is empty!" description="Add new tasks to get busy">
        <Button>Create Task</Button>
        </EmptyState>
    );
}

export default HomeEmptyState;