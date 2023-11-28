'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

const handleShowToast = (toast: any) => {
    toast({
        title: 'Scheduled: Catch up ',
        description: 'Friday, February 10, 2023 at 5:57 PM',
        action: <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>,
    });
};

export default function DemoCardPage() {
    const { toast } = useToast();
    return (
        <div className='flex flex-col max-w-[400px] mt-4 mx-auto p-2'>
            <Card className='w-[350px]'>
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className='grid w-full items-center gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor='name'>Name</Label>
                                <Input
                                    id='name'
                                    placeholder='Name of your project'
                                />
                            </div>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor='framework'>Framework</Label>
                                <Select>
                                    <SelectTrigger id='framework'>
                                        <SelectValue placeholder='Select' />
                                    </SelectTrigger>
                                    <SelectContent position='popper'>
                                        <SelectItem value='next'>
                                            Next.js
                                        </SelectItem>
                                        <SelectItem value='sveltekit'>
                                            SvelteKit
                                        </SelectItem>
                                        <SelectItem value='astro'>
                                            Astro
                                        </SelectItem>
                                        <SelectItem value='nuxt'>
                                            Nuxt.js
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Button variant='outline'>Cancel</Button>
                    <Button onClick={() => handleShowToast(toast)}>
                        Deploy
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
