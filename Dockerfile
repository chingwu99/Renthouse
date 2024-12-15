FROM node:20-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY . .


RUN npm install

# # 生成 Prisma Client
RUN npx prisma generate

# # 安裝必要的系統依賴
RUN apk add --no-cache openssl libc6-compat

EXPOSE 3000

CMD ["npm", "run", "dev"]