interface Category {
    slug: string;
    name: string;
    url: string;
};

interface ProductsResponce {
    products: Product[];
    total:    number;
    skip:     number;
    limit:    number;
}

interface Product {
    id:                   number;
    title:                string;
    description:          string;
    category:             string;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 string[];
    brand:                string;
    sku:                  string;
    weight:               number;
    dimensions:           Dimensions;
    warrantyInformation:  string;
    shippingInformation:  string;
    availabilityStatus:   string;
    reviews:              Review[];
    returnPolicy:         string;
    minimumOrderQuantity: number;
    meta:                 Meta;
    images:               string[];
    thumbnail:            string;
}

interface CartItem extends Pick<Product, 'id' | 'title' | 'price' | 'thumbnail'> {
    quantity: number;
}

interface Dimensions {
    width:  number;
    height: number;
    depth:  number;
}

interface Meta {
    createdAt: Date;
    updatedAt: Date;
    barcode:   string;
    qrCode:    string;
}

interface Review {
    rating:        number;
    comment:       string;
    date:          Date;
    reviewerName:  string;
    reviewerEmail: string;
}

interface BreadcrumbsItem {
    name: string;
    link?: string | undefined;
}

export type { Category, ProductsResponce, Product,  BreadcrumbsItem, CartItem };