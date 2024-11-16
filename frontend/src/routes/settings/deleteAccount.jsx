import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "../../components/ui/dialog"
import { Button } from "@chakra-ui/react";


function DeleteAccount() {
    return (
        <DialogRoot role="alertdialog">
            <DialogTrigger asChild>
            <Button marginTop="300px" variant="outline" colorPalette="red" size="sm">
                Deactivate Account
            </Button>
            </DialogTrigger>
            <DialogContent style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -20%)' }}>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <p>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our systems.
                    </p>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button colorPalette="red">Delete</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
    
}

export default DeleteAccount;