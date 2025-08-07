import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Select, { components } from "react-select";
import generateNewOrderId from "./RandomIdGeneratror";
import ProtectedRoute from "./ProtectedRoute";

const OrderForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [garmentList, setGarmentList] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    productName: "",
    units: "",
  });
  const [selectedSubProducts, setSelectedSubProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [orders, setOrders] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [availablePoints, setAvailablePoints] = useState(0);
  const [pointsError, setPointsError] = useState("");
  const [pointsToApply, setPointsToApply] = useState(0); // New state for points to apply
  const [loading, setLoading] = useState(false);
  const [submitionLoading, setSubmitionLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [category, setCategory] = useState({
    categoryName: "",
    categoryId: "",
  });
  const [locations, setLocations] = useState([]);
  const [selectedGarments, setSelectedGarments] = useState([]);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [suggestions, setSuggestions] = useState({ name: [], phoneNumber: [] });
  const [showSuggestions, setShowSuggestions] = useState({
    name: false,
    phoneNumber: false,
  });

  const [formData, setFormData] = useState({
    orderId: "",
    name: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    products: [],
    category: [],
    units: [],
    garmentDetails: [],
    subUnits: [],
    address: "",
    addressLine1: "",
    addressLine2: "",
    city: "Kurnool",
    stateProvince: "Andhra Pradesh",
    postalCode: "",
    country: "",
    location: "",
    dateOfOrder: "",
    dateOfDelivery: "",
    mode: "",
    paymentStatus: "",
    totalPrice: "",
    delivery: false,
    discount: "0",
    gender: "",
    emailAddress: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    dateOfBirth: "",
  });

  const [error, setError] = useState("");

  const fetchAvailablePoints = async () => {
    try {
      const response = await api.get('api/web-user/points');
      setAvailablePoints(response.data.points);
    } catch (error) {
      console.error("Error fetching available points:", error);
      setPointsError("Failed to fetch available points");
    }
  };

  const applyPoints = async (pointsToUse) => {
    try {
      const response = await api.post('api/web-user/apply-points', {
        pointsToUse
      });
      setAvailablePoints(response.data.remainingPoints);
      return true;
    } catch (error) {
      console.error("Error applying points:", error);
      setPointsError("Failed to apply points");
      return false;
    }
  };

  const handlePointsChange = (e) => {
    const points = parseInt(e.target.value) || 0;
    if (points > availablePoints) {
      setPointsError("Cannot apply more points than available");
    } else if (points > totalPrice) {
      setPointsError("Cannot apply points exceeding total price");
    } else if (points < 0) {
      setPointsError("Points cannot be negative");
    } else {
      setPointsError("");
      setPointsToApply(points);
      setFormData((prev) => ({ ...prev, discount: points.toString() }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "name" || name === "phoneNumber") {
      fetchSuggestions(value, name);
    }
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "firstName" || name === "lastName") {
      const fullName = `${formData.firstName || ""} ${
        formData.lastName || ""
      }`.trim();
      setFormData((prev) => ({ ...prev, name: fullName }));
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "addressLine1") {
      setFormData((prev) => ({ ...prev, address: value }));
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setFormData({
      ...formData,
      name: suggestion.name,
      firstName: suggestion.name.split(" ")[0] || "",
      lastName: suggestion.name.split(" ").slice(1).join(" ") || "",
      phoneNumber: suggestion.phoneNumber,
      address: suggestion.address,
      addressLine1: suggestion.address,
    });
    setShowSuggestions({ name: false, phoneNumber: false });
  };

  const fetchSuggestions = async (query, field) => {
    if (query.length < 2) return;

    try {
      const response = await api.get(`api/orders/search`, {
        params: { query, field },
      });
      setSuggestions((prev) => ({ ...prev, [field]: response.data }));
      setShowSuggestions((prev) => ({ ...prev, [field]: true }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleProductChange = (e) => {
    if (selectedProduct.productName === e.label) return;
    setSelectedProduct({ ...selectedProduct, productName: e.label });
    const filteredgarment = garmentList.filter(
      (garment) => garment.categoryName === e.label
    );
    setSelectedGarments(filteredgarment[0]?.products);
    setSelectedSubProducts([]);
    setQuantities({});
  };

  const handleUnitsChange = (e) => {
    setSelectedProduct({ ...selectedProduct, units: e.target.value });
  };

  const saveCustomerDetails = async (orderId) => {
    try {
      await api.post(`api/customers/${orderId}`, {
        orderId,
        dateOfOrder: formData.dateOfOrder,
        phoneNumber: formData.phoneNumber,
        modeOfTransaction: formData.mode,
        location: formData.location,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        emailAddress: formData.emailAddress,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        city: formData.city,
        stateProvince: formData.stateProvince,
        postalCode: formData.postalCode,
        country: formData.country,
        emergencyContactName: formData.emergencyContactName,
        emergencyContactNumber: formData.emergencyContactNumber,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await api.get(`api/route-location/all-locations`);
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const processAssign = async (orderId) => {
    try {
      const process = {
        process1: { userId: "null", status: "Pending", timing: null },
        process2: { userId: "null", status: "Pending", timing: null },
        process3: { userId: "null", status: "Pending", timing: null },
        process4: { userId: "null", status: "Pending", timing: null },
      };
      await api.post(`api/processes/order-process`, {
        orderId: orderId,
        currentProcess: "process0",
        process: process,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get(`api/services/names`);
      setCategories(response.data);
    } catch (err) {
      setError("Failed to fetch categories");
    }
  };

  const fetchGarments = async () => {
    try {
      const response = await api.get(`api/garment/all`);
      setGarmentList(response.data);
    } catch (err) {
      setError("Failed to fetch Garments");
    }
  };

  const fetchProducts = async (categoryId, categoryName) => {
    setSelectedProduct({ productName: "", units: "" });
    try {
      const response = await api.get(`api/services/service_id/${categoryId}`);
      setProducts(response.data.products);
      setCategory({ categoryId: categoryId, categoryName: categoryName });
    } catch (err) {
      setError("Failed to fetch products");
    }
  };

  const removeProduct = (index) => {
    if (index < 0 || index >= selectedProducts.length) return;

    const removedProduct = selectedProducts[index];
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    const updatedFormData = {
      ...formData,
      category: formData.category.filter((_, i) => i !== index),
      products: formData.products.filter((_, i) => i !== index),
      units: formData.units.filter((_, i) => i !== index),
      subUnits: formData.subUnits.filter((_, i) => i !== index),
      garmentDetails: formData.garmentDetails.filter((_, i) => i !== index),
    };

    const newTotalPrice = totalPrice - removedProduct.totalPrice;
    const newTotalPoints = earnedPoints - removedProduct.totalPoints;

    setSelectedProducts(updatedProducts);
    setFormData(updatedFormData);
    setTotalPrice(newTotalPrice);
    setEarnedPoints(newTotalPoints);
  };

  const addProduct = () => {
    const product = products.find(
      (prod) => prod.productName === selectedProduct.productName
    );
    const pricePerUnit = product ? product.price : 0;
    const pointsPerUnit = product.points;
    const productTotalPrice = pricePerUnit * selectedProduct.units;
    const productTotalPoints = pointsPerUnit * selectedProduct.units;

    const newProduct = {
      categoryId: category.categoryId,
      productName: selectedProduct.productName,
      units: selectedProduct.units,
      pricePerUnit,
      pointsPerUnit,
      totalPrice: productTotalPrice,
      totalPoints: productTotalPoints,
    };

    formData.category.push(category.categoryName);
    formData.products.push(selectedProduct.productName);
    formData.units.push(selectedProduct.units);

    setSelectedProducts([...selectedProducts, newProduct]);
    setTotalPrice(totalPrice + productTotalPrice);
    setEarnedPoints(earnedPoints + productTotalPoints);

    const selSubproDetails = selectedSubProducts.map((product) => {
      return product.label.props.children[0];
    });
    const selSubproQuantity = selectedSubProducts.map((product) => {
      return quantities[product.value] || 1;
    });

    formData.garmentDetails.push(selSubproDetails);
    formData.subUnits.push(selSubproQuantity);

    setSelectedSubProducts([]);
    setQuantities({});
    setSelectedProduct({
      productName: "",
      units: "",
    });
  };

  const calculateMaxTAT = () => {
    if (!selectedProducts || !Array.isArray(selectedProducts)) {
      console.error("Invalid selectedProducts array");
      return;
    }

    const tatValues = selectedProducts.map((prod) => {
      const selectedCategory = categories.find(
        (cat) => cat._id === prod.categoryId
      );
      if (!selectedCategory) {
        console.error("Category not found for product:", prod);
        return 0;
      }
      const tat = selectedCategory.TAT;
      if (typeof tat !== "number" || isNaN(tat)) {
        console.error("Invalid TAT value for category:", selectedCategory);
        return 0;
      }
      return tat;
    });

    const newMaxTAT = Math.max(...tatValues);
    if (newMaxTAT === -Infinity || isNaN(newMaxTAT)) {
      console.error("Invalid maximum TAT value:", newMaxTAT);
      return;
    }

    const deliveryDate = new Date();
    if (newMaxTAT > 0) {
      deliveryDate.setDate(deliveryDate.getDate() + newMaxTAT);
    } else {
      console.error("Invalid TAT, cannot calculate delivery date");
      return;
    }

    setFormData({
      ...formData,
      dateOfDelivery: deliveryDate.toISOString().split("T")[0],
    });
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get(`api/orders`);
      setOrders(response.data || []);
    } catch (err) {
      setError("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const createQrProcessUnits = async (orderId, units, subUnits) => {
    let totalQrUnits = 0;
    for (let i = 0; i < Number(units.length); i++) {
      if (Number(subUnits[i].length) > 0) {
        totalQrUnits += subUnits[i].reduce((acc, val) => acc + Number(val), 0);
      } else {
        totalQrUnits += Number(units[i]);
      }
    }
    try {
      const response = await api.post(`api/qr-process/add/units`, {
        orderID: orderId,
        units: totalQrUnits,
      });
      if (response.data.success) {
        console.log("QR Process Units created successfully");
      } else {
        console.error("Failed to create QR Process Units");
      }
    } catch (error) {
      console.error("Error creating QR process units:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitionLoading(true);
    setError("");
    setPointsError("");

    if (pointsError) {
      setSubmitionLoading(false);
      return;
    }

    const newOrderId =
      orders.length !== 0
        ? generateNewOrderId(orders[0].orderId)
        : generateNewOrderId("0");

    const finalPrice = totalPrice - pointsToApply;

    try {
      const orderPayload = {
        orderId: newOrderId,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        products: formData.products,
        category: formData.category,
        units: formData.units,
        garmentDetails: formData.garmentDetails,
        subUnits: formData.subUnits,
        address: formData.addressLine1,
        location: formData.location,
        dateOfOrder: formData.dateOfOrder,
        dateOfDelivery: formData.dateOfDelivery,
        mode: formData.mode,
        paymentStatus: formData.paymentStatus,
        totalPrice: finalPrice,
        earnedPoints: earnedPoints,
        delivery: formData.delivery,
        discount: pointsToApply.toString(),
        pointsUsed: pointsToApply,
      };

      // 1. Create the main order
      await api.post(`api/orders`, orderPayload);

      // 2. Apply points if any were used
      if (pointsToApply > 0) {
        const pointsApplied = await applyPoints(pointsToApply);
        if (!pointsApplied) {
          throw new Error("Failed to apply points");
        }
      }

      // 3. Call other related functions
      await createQrProcessUnits(newOrderId, formData.units, formData.subUnits);
      await saveCustomerDetails(newOrderId);
      await processAssign(newOrderId);

      // 4. Reset the form and state
      setFormData({
        orderId: "",
        name: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        products: [],
        category: [],
        units: [],
        garmentDetails: [],
        subUnits: [],
        address: "",
        addressLine1: "",
        addressLine2: "",
        city: "Kurnool",
        stateProvince: "Andhra Pradesh",
        postalCode: "",
        country: "",
        location: "",
        dateOfOrder: "",
        dateOfDelivery: "",
        mode: "",
        paymentStatus: "",
        totalPrice: "",
        delivery: false,
        discount: "0",
        gender: "",
        emailAddress: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
        dateOfBirth: "",
      });

      setPointsToApply(0);
      fetchOrders();
      setSelectedProducts([]);
      setEarnedPoints(0);
      setTotalPrice(0);
      setShowForm(false);
      fetchAvailablePoints();

      alert("Order Submitted Successfully");
    } catch (err) {
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (err.response && err.response.data && err.response.data.error) {
        errorMessage = `Submission Failed: ${err.response.data.error}`;
        console.error("Backend Validation Error:", err.response.data);
      } else {
        console.error("Request Error:", err.message);
      }
      
      setError(errorMessage);
    } finally {
      setSubmitionLoading(false);
    }
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
    if (checked) {
      setTotalPrice(totalPrice + 50);
    } else {
      setTotalPrice(totalPrice - 50);
    }
  };

  const handleListChange = (selectedOptions) => {
    setSelectedSubProducts(selectedOptions || []);
  };

  const getPricePerUnits = () => {
    const product = products.find(
      (prod) => prod.productName === selectedProduct.productName
    );
    const pricePerUnit = product ? product.price : 0;
    return pricePerUnit;
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  const CustomMultiValueRemove = (props) => {
    const { innerProps } = props;

    return (
      <components.MultiValueRemove {...props}>
        <span onClick={innerProps.onClick} style={{ cursor: "pointer" }}>
          ✕
        </span>
      </components.MultiValueRemove>
    );
  };

  useEffect(() => {
    fetchCategories();
    fetchOrders();
    fetchGarments();
    fetchLocations();
    fetchAvailablePoints();
  }, []);

  useEffect(() => {
    calculateMaxTAT();
  }, [selectedProducts]);

  if (submitionLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-700">
        Submitting...
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-md">
      <h2 className="px-4 text-2xl font-bold mb-4 text-blue-800">
        Appointment Management
      </h2>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mx-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mb-4 transition duration-300"
      >
        {showForm ? "Hide Appointment Form" : "Book Appointment"}
      </button>

      {showForm && (
        <ProtectedRoute>
          <form
            onSubmit={handleSubmit}
            className="mb-4 p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Select
                options={categories.map((cat) => ({
                  value: cat._id,
                  label: cat.serviceName,
                }))}
                onChange={(e) => fetchProducts(e.value, e.label)}
                placeholder="Select Category"
                className="basic-select"
                classNamePrefix="select"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "#3b82f6",
                    "&:hover": {
                      borderColor: "#2563eb",
                    },
                  }),
                }}
              />

              <Select
                options={products.map((prod) => ({
                  value: prod._id,
                  label: prod.productName,
                }))}
                onChange={handleProductChange}
                value={
                  selectedProduct.productName
                    ? {
                        label: selectedProduct.productName,
                        value: selectedProduct.productName,
                      }
                    : null
                }
                placeholder="Select Product"
                className="basic-select"
                classNamePrefix="select"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "#3b82f6",
                    "&:hover": {
                      borderColor: "#2563eb",
                    },
                  }),
                }}
              />

              {category.categoryName.split(" ").pop() === "Kilowise" && (
                <Select
                  isMulti
                  isSearchable
                  options={
                    selectedGarments &&
                    selectedGarments.map((cat) => ({
                      value: cat._id,
                      labelText: cat.productName,
                      label: (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {cat.productName}
                          <input
                            type="number"
                            min="1"
                            style={{ width: "40px", marginLeft: "10px" }}
                            placeholder="Qty"
                            onChange={(e) => {
                              handleQuantityChange(cat._id, e.target.value);
                            }}
                          />
                        </div>
                      ),
                    }))
                  }
                  value={selectedSubProducts}
                  onChange={handleListChange}
                  placeholder="Select Products"
                  components={{ MultiValueRemove: CustomMultiValueRemove }}
                  formatOptionLabel={(option) => option.label}
                  getOptionLabel={(option) => option.labelText}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "#3b82f6",
                      "&:hover": {
                        borderColor: "#2563eb",
                      },
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: "#dbeafe",
                      maxWidth: "200px",
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: "#1e40af",
                    }),
                    multiValueRemove: (base) => ({
                      ...base,
                      color: "#ef4444",
                      ":hover": {
                        backgroundColor: "#fee2e2",
                        color: "#dc2626",
                      },
                    }),
                  }}
                />
              )}

              <input
                type="number"
                name="units"
                value={selectedProduct.units}
                placeholder="Units"
                onChange={handleUnitsChange}
                className="border border-blue-300 p-2 rounded focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                min="1"
              />
            </div>
            <p className="mb-6 text-blue-700 font-medium">
              ₹{getPricePerUnits()} Price / Unit
            </p>

            {selectedProduct.productName && selectedProduct.units && (
              <button
                type="button"
                onClick={addProduct}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mb-6 transition duration-300"
              >
                Add Product
              </button>
            )}

            {selectedProducts.length > 0 && (
              <div className="mt-4 mb-8 overflow-x-auto">
                <h3 className="font-bold text-blue-800 mb-2">
                  Selected Products
                </h3>
                <table className="min-w-full bg-white border border-blue-200">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="py-2 px-4 border border-blue-200">
                        Category
                      </th>
                      <th className="py-2 px-4 border border-blue-200">
                        Product
                      </th>
                      <th className="py-2 px-4 border border-blue-200">
                        Units
                      </th>
                      <th className="py-2 px-4 border border-blue-200">
                        Price/Unit
                      </th>
                      <th className="py-2 px-4 border border-blue-200">
                        Total
                      </th>
                      <th className="py-2 px-4 border border-blue-200">
                        Points
                      </th>
                      <th className="py-2 px-4 border border-blue-200">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProducts.map((prod, index) => {
                      const category = categories.find(
                        (cat) => cat._id === prod.categoryId
                      );
                      return (
                        <tr key={index} className="hover:bg-blue-50">
                          <td className="border border-blue-200 px-4 py-2">
                            {category?.serviceName}
                          </td>
                          <td className="border border-blue-200 px-4 py-2">
                            {prod.productName}
                          </td>
                          <td className="border border-blue-200 px-4 py-2">
                            {prod.units}
                          </td>
                          <td className="border border-blue-200 px-4 py-2">
                            ₹{prod.pricePerUnit.toFixed(2)}
                          </td>
                          <td className="border border-blue-200 px-4 py-2">
                            ₹{prod.totalPrice.toFixed(2)}
                          </td>
                          <td className="border border-blue-200 px-4 py-2 text-green-600 font-semibold">
                            {prod.totalPoints}
                          </td>
                          <td className="border border-blue-200 px-4 py-2">
                            <button
                              type="button"
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-300"
                              onClick={() => removeProduct(index)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="mb-6">
                  <label
                    htmlFor="earnedPoints"
                    className="block text-green-700 mb-1"
                  >
                    Total Earned Points
                  </label>
                  <input
                    type="number"
                    name="earnedPoints"
                    value={earnedPoints}
                    className="border border-green-300 p-2 rounded w-full bg-gray-100 font-bold text-green-800"
                    readOnly
                  />
                </div>
              </div>
            )}

            {selectedProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="delivery"
                    name="delivery"
                    checked={formData.delivery}
                    onChange={handleToggleChange}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
                  />
                  <label htmlFor="delivery" className="ml-2 text-blue-700">
                    Pickup & Delivery ₹50
                  </label>
                </div>
              </div>
            )}

            {selectedProducts.length > 0 && (
              <div className="mb-6">
                <label
                  htmlFor="availablePoints"
                  className="block text-blue-700 mb-1"
                >
                  Available Points
                </label>
                <input
                  type="number"
                  name="availablePoints"
                  value={availablePoints}
                  className="border border-blue-300 p-2 rounded w-full bg-gray-100 font-bold text-blue-800"
                  readOnly
                />
                {pointsError && <p className="text-red-500 mt-1">{pointsError}</p>}
              </div>
            )}

            {selectedProducts.length > 0 && (
              <div className="mb-6">
                <label
                  htmlFor="pointsToApply"
                  className="block text-blue-700 mb-1"
                >
                  Points to Apply
                </label>
                <input
                  type="number"
                  name="pointsToApply"
                  value={pointsToApply}
                  onChange={handlePointsChange}
                  placeholder="Enter points to apply"
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  min="0"
                  max={Math.min(availablePoints, totalPrice)}
                />
                {pointsError && <p className="text-red-500 mt-1">{pointsError}</p>}
              </div>
            )}

            {selectedProducts.length > 0 && (
              <div className="mb-6">
                <label
                  htmlFor="totalPrice"
                  className="block text-blue-700 mb-1"
                >
                  Total Price (After Points Discount)
                </label>
                <input
                  type="number"
                  name="totalPrice"
                  value={(totalPrice - pointsToApply).toFixed(2)}
                  className="border border-blue-300 p-2 rounded w-full bg-gray-100 font-bold text-blue-800"
                  readOnly
                />
              </div>
            )}

            <div className="rounded-lg mb-6">
              <h3 className="text-blue-800 font-bold mb-4">
                Customer Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-blue-700 mb-1"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={handleNameChange}
                    className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-blue-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={handleNameChange}
                    className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-blue-700 mb-1"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  required
                />
                {showSuggestions.phoneNumber &&
                  suggestions.phoneNumber.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-blue-200 rounded shadow-md mt-1 max-h-60 overflow-auto">
                      {suggestions.phoneNumber.map((suggestion, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-blue-100 cursor-pointer"
                          onClick={() => handleSelectSuggestion(suggestion)}
                        >
                          {suggestion.name} - {suggestion.phoneNumber}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="addressLine1"
                  className="block text-blue-700 mb-1"
                >
                  Address Line 1*
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  placeholder="Address Line 1"
                  onChange={handleAddressChange}
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="addressLine2"
                  className="block text-blue-700 mb-1"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  placeholder="Address Line 2"
                  onChange={handleAddressChange}
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-blue-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value="Kurnool"
                    disabled
                    placeholder="only available in Kurnool, Andhra Pradesh"
                    className="border border-blue-300 p-2 rounded w-full bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="stateProvince"
                    className="block text-blue-700 mb-1"
                  >
                    State/Province
                  </label>
                  <input
                    type="text"
                    name="stateProvince"
                    value="Andhra Pradesh"
                    disabled
                    className="border border-blue-300 p-2 rounded w-full bg-gray-100 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-blue-700 mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    placeholder="Postal Code"
                    onChange={handleAddressChange}
                    className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="block text-blue-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  placeholder="Country"
                  onChange={handleAddressChange}
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowCustomerDetails(!showCustomerDetails)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4"
                ></button>
                <div className="rounded-lg mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="block text-blue-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        placeholder="Email Address"
                        onChange={handleChange}
                        className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="gender"
                        className="block text-blue-700 mb-1"
                      >
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer Not Say">
                          Prefer Not to Say
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-blue-700 mb-1"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="emergencyContactName"
                        className="block text-blue-700 mb-1"
                      >
                        Emergency Contact Name
                      </label>
                      <input
                        type="text"
                        name="emergencyContactName"
                        value={formData.emergencyContactName}
                        placeholder="Emergency Contact Name"
                        onChange={handleChange}
                        className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="emergencyContactNumber"
                        className="block text-blue-700 mb-1"
                      >
                        Emergency Contact Number
                      </label>
                      <input
                        type="text"
                        name="emergencyContactNumber"
                        value={formData.emergencyContactNumber}
                        placeholder="Emergency Contact Number"
                        onChange={handleChange}
                        className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="location" className="block text-blue-700 mb-1">
                  Location*
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="dateOfOrder"
                  className="block text-blue-700 mb-1"
                >
                  Order Date*
                </label>
                <input
                  type="date"
                  name="dateOfOrder"
                  value={formData.dateOfOrder}
                  onChange={handleChange}
                  className="border border-blue-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dateOfDelivery"
                className="block text-blue-700 mb-1"
              >
                Delivery Date
              </label>
              <input
                type="date"
                name="dateOfDelivery"
                value={formData.dateOfDelivery}
                className="border border-blue-300 p-2 rounded w-full bg-gray-100"
                disabled
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 w-full"
              disabled={pointsError !== ""}
            >
              Submit Order
            </button>

            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            {pointsError && <p className="text-red-500 mt-4 text-center">{pointsError}</p>}
          </form>
        </ProtectedRoute>
      )}
    </div>
  );
};

export default OrderForm;