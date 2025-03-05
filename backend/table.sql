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