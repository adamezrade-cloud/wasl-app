import {
  listSuccessStories,
  getReviewsStats,
  createReview,
  seedSuccessStoriesIfEmpty,
} from "@/services/reviews.service";
import { ok, fail } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const view = searchParams.get("view");

    if (view === "stats") {
      return ok(await getReviewsStats());
    }

    const rows = await listSuccessStories({
      sector: searchParams.get("sector") ?? undefined,
      minRating: searchParams.get("minRating")
        ? Number(searchParams.get("minRating"))
        : 4,
      featuredOnly: searchParams.get("featured") === "1",
      limit: Number(searchParams.get("limit") ?? 24),
    });

    return ok(rows, { total: rows.length });
  } catch (e) {
    return fail(e instanceof Error ? e.message : "خطأ في جلب التقييمات", 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === "seed") {
      const result = await seedSuccessStoriesIfEmpty();
      return ok(result, undefined, result.message);
    }

    const required = ["orderId", "reviewerId", "revieweeId", "rating"];
    for (const k of required) {
      if (body[k] === undefined || body[k] === null || body[k] === "") {
        return fail(`الحقل المطلوب مفقود: ${k}`);
      }
    }

    const row = await createReview({
      orderId: body.orderId,
      reviewerId: body.reviewerId,
      revieweeId: body.revieweeId,
      rating: Number(body.rating),
      title: body.title,
      comment: body.comment,
      sector: body.sector,
      countryCode: body.countryCode,
      isVerified: body.isVerified,
      isFeatured: body.isFeatured,
      isSuccessStory: body.isSuccessStory,
    });

    return ok(row, undefined, "تم حفظ التقييم الموثّق");
  } catch (e) {
    const msg = e instanceof Error ? e.message : "فشل حفظ التقييم";
    if (msg.includes("unique") || msg.includes("duplicate")) {
      return fail("تم تقييم هذا الطلب مسبقًا من نفس المستخدم", 409);
    }
    return fail(msg, 400);
  }
}
