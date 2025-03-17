CREATE TABLE
  public.shop (
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    price numeric(10, 2) NOT NULL,
    created_at timestamp without time zone NULL DEFAULT CURRENT_TIMESTAMP
  );

ALTER TABLE
  public.shop
ADD
  CONSTRAINT shop_pkey PRIMARY KEY (id)


INSERT INTO public.shop
(id, "name", image, price, created_at)
VALUES(1, 'Le quadrant du cashflow', 'https://m.media-amazon.com/images/I/61GOUa3rp7L._SL1225_.jpg', 13000.00, '2025-03-09 21:53:18.917');