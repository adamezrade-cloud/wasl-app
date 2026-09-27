import { inspectIp, getDemoThreatIps } from "@/infrastructure/ip-inspector";
import { ok, fail, getClientIp, getUserAgent, fromResult } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    if (searchParams.get("view") === "demo-threats") {
      return ok({
        ips: getDemoThreatIps(),
        note: "عناوين تجريبية تُرفض مباشرة في الوضع offline/heuristic",
      });
    }

    const ip = searchParams.get("ip") || getClientIp(request);
    const enforce = searchParams.get("enforce") !== "0";
    const offline =
      searchParams.get("offline") === "1" ||
      process.env.IP_INSPECTOR_OFFLINE === "1" ||
      Boolean(searchParams.get("ip"));

    const result = await inspectIp(
      ip,
      {
        enforceBlock: enforce,
        offlineOnly: offline,
        context: "manual",
        userAgent: getUserAgent(request),
        userId: searchParams.get("userId") ?? undefined,
      },
      request.headers
    );

    if (!result.ok) return fromResult(result);
    return ok(result.value);
  } catch (e) {
    return fail(e instanceof Error ? e.message : "فشل فحص IP", 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const ip = body.ip || getClientIp(request);
    const result = await inspectIp(
      ip,
      {
        enforceBlock: body.enforceBlock !== false,
        offlineOnly:
          body.offlineOnly === true ||
          process.env.IP_INSPECTOR_OFFLINE === "1" ||
          Boolean(body.ip),
        context: body.context ?? "manual",
        userId: body.userId,
        userAgent: getUserAgent(request),
      },
      request.headers
    );

    if (!result.ok) return fromResult(result);
    return ok(result.value, undefined, "IP نظيف");
  } catch (e) {
    return fail(e instanceof Error ? e.message : "فشل فحص IP", 500);
  }
}
