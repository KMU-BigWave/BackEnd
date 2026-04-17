import { db } from "../config/db.js";

export const userModel = {
  async findByProviderUserId(provider, providerUserId) {
    const query = `
      SELECT *
      FROM users
      WHERE provider = $1 AND provider_user_id = $2
      LIMIT 1
    `;

    const result = await db.query(query, [provider, providerUserId]);
    return result.rows[0] || null;
  },
};

