import { CreateProductApi } from "../../utils/APIs/SallerApi";

export const CreateProductAction = (values) => async (_) => {
  console.log(values, "From Actions");
  const {
    title,
    category,
    description,
    images,
    originalPrice,
    discountPrice,
    stock,
    name,
    shopId,
  } = values;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("originalPrice", originalPrice);
  formData.append("discountPrice", discountPrice);
  formData.append("stock", stock);
  //   formData.append("images", images);
  for (var i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }

  formData.append("shopId", shopId);

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const { data } = await CreateProductApi(formData, config);
  console.log(data);
};
