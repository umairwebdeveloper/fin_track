import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { reset_password } from "../store/auth";

const ResetPasswordPage = () => {
	const dispatch = useDispatch();

	const [requestSent, setRequestSent] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
	});
	const { email } = formData;

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setRequestSent(true);
		dispatch(reset_password(email));
		setRequestSent(false);
	};

	return (
		<div
			className="container mt-5 d-flex justify-content-center align-items-center"
			style={{ minHeight: "90vh" }}
		>
			<div className="row justify-content-center align-items-center w-100">
				<div className="col-lg-4 col-md-10">
					<h1 className="text-center">Forgot Password</h1>
					<p className="text-center">
						Enter the email address associated with your account
					</p>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								placeholder="Enter email"
                required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary mt-3 w-100"
							style={{ borderRadius: "50px" }}
							disabled={requestSent}
						>
							{requestSent ? "Loading..." : "Send Reset Link"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPasswordPage;
