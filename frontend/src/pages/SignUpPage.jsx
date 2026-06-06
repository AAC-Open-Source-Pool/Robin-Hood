import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
        padding: "1rem",
      }}
    >
      <motion.div
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            color: "#9f4444",
          }}
        >
          Robin Hood
        </h2>
      </motion.div>

      <motion.div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "2rem",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={styles.label} htmlFor="name">
              Full name
            </label>
            <div style={styles.inputWrapper}>
              <User style={styles.icon} />
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={styles.input}
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label style={styles.label} htmlFor="email">
              Email address
            </label>
            <div style={styles.inputWrapper}>
              <Mail style={styles.icon} />
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={styles.input}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <div style={styles.inputWrapper}>
              <Lock style={styles.icon} />
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={styles.input}
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label style={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div style={styles.inputWrapper}>
              <Lock style={styles.icon} />
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                style={styles.input}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              backgroundColor: "#9f4444",
              color: "#ffffff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#822f2f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9f4444")}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                Loading...
              </>
            ) : (
              <>
               
                <UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
                Sign up
           
              </>
            )}
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center", color: "#666666" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#9f4444", fontWeight: "bold" }}>
            Login here <ArrowRight className="inline h-4 w-4" />
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

const styles = {
  label: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    color: "#333333",
  },
  inputWrapper: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9f4444",
  },
  input: {
    width: "100%",
    padding: "0.5rem 1rem 0.5rem 2.5rem",
    border: "1px solid #cccccc",
    borderRadius: "5px",
    fontSize: "0.875rem",
    color: "#333333",
    backgroundColor: "#f9f9f9",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
};

export default SignUpPage;
