import { Handlers, Status } from "$fresh/server.ts";
import { payloadMail } from "../../utils/api/types.ts";

const handler: Handlers = {
  async POST(req: Request) {
    const payload: payloadMail | undefined = await req.json();
    
    if (payload?.email && payload?.message && payload?.name) {
      const ntfyResponse = await fetch("https://ntfy.sh", {
        method: "POST",
        body: JSON.stringify({
          "topic": Deno.env.get("TOPIC")!,
          "title": `¡${payload.name} quiere contactar contigo!`,
          "message": `Email: ${payload.email} Message: ${payload.message}`
        })
      })

      if(ntfyResponse.ok){
        return new Response("Ok", { status: Status.OK})
      }

      return new Response(ntfyResponse.statusText, { status: ntfyResponse.status});
    }

    return new Response("Complete inputs", { status: Status.NoContent });
  },
};

export { handler };
