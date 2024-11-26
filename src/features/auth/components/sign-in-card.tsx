import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DottedSeparator } from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const SigninCard = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="text-center p-7 flex items-center justify-center">
        <CardTitle className="text-2xl">Welcom back</CardTitle>
      </CardHeader>
      <div className="px-7 ">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={''}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={''}
            onChange={() => {}}
            placeholder="Enter password"
            min={8}
            max={256}
            disabled={false}
          />

          <Button className="w-full" size="lg" disabled={false}>
            Login
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="size-5 mr-2" /> Login with Google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FaGithub className="size-5 mr-2" />
          Login with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};
