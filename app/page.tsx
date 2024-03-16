import * as threads from "@/app/lib/db/thread"
import { Headline } from "./components/elements/headline/Headline";
import { Card } from "./features/card/components/Card";

export default async function Home() {
  const data = await threads.server.getAll()

  return (
    <main className="text-center">
      <div className='pt-4'>
        <div className="flex justify-center">
          <Headline
            icon={(
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
              </svg>
            )}
            text={"新着"}
          />
        </div>
        <div className='space-y-8 p-2'>
          {data?.map((v) => (
            <Card
              key={v.id}
              {...v} />
          ))}
        </div>
      </div>
    </main>
  );
}
