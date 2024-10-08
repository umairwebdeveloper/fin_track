import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { reset_password_confirm } from "../store/auth";

const ResetPasswordConfirmPage = () => {
	const dispatch = useDispatch();
	const [requestSent, setRequestSent] = useState(false);

	const { uid, token } = useParams();
	const [formData, setFormData] = useState({
		new_password: "",
		re_new_password: "",
	});
	const { new_password, re_new_password } = formData;

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (new_password === re_new_password) {
			setRequestSent(true);
			dispatch(
				reset_password_confirm(
					uid,
					token,
					new_password,
					re_new_password
				)
			);
			setRequestSent(false);
		} else {
			toast.error("Passwords do not match!");
		}
	};

	return (
		<div
			className="container mt-5 d-flex justify-content-center align-items-center"
			style={{ minHeight: "90vh" }}
		>
			<div className="row justify-content-center align-items-center w-100">
				<div className="col-lg-4 col-md-10">
					<h1 className="text-center">Reset Password</h1>
					<p className="text-center">Enter your new password</p>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="form-group mb-3">
							<label htmlFor="new_password">New Password</label>
							<input
								type="password"
								name="new_password"
								value={new_password}
								onChange={handleOnChange}
								className="form-control"
								id="new_password"
								placeholder="New Password"
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="re_new_password">
								Confirm New Password
							</label>
							<input
								type="password"
								name="re_new_password"
								value={re_new_password}
								onChange={handleOnChange}
								className="form-control"
								id="re_new_password"
								placeholder="Confirm New Password"
								required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary mt-3 w-100"
							style={{ borderRadius: "50px" }}
							disabled={requestSent}
						>
							Reset Password
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPasswordConfirmPage;
